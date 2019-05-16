import React from "react";
import { graphql } from "gatsby";

import Element from "../components/Element";

import Layout from "../components/layout";
import SearchBy from "../components/SearchBy";
import Input from "../components/Input";

import getFilterFunction from "../lib/getFilterFunction";

import "./main.scss";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "name", // the term by which search is performed, once user starts typing in the box
      name: "",
      symbol: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioButton = this.handleRadioButton.bind(this);
  }

  handleInputChange(value) {
    // gets called from inside the Input Component with the "value" of the input tag
    this.setState(() => ({
      [this.state.term]: value,
    }));
  }

  handleRadioButton(e) {
    // get called from SearchBy Component with the value of the selected Radio button
    e.persist();
    this.setState(() => ({
      term: e.target.value,
    }));
  }

  render() {
    const { data } = this.props;
    const { elements } = data.dataJson;

    const searchActive = !!(this.state.name && this.state.symbol); // turns "True" when user stars typing

    const displayedElements = elements.filter(
      getFilterFunction(this.state.term, this.state)
    ); // these are all the elements to be displayed on the screen, after applying search term

    //=============================================================================================================
    // Separating Actinides and Lanthanides from "normal" elements, so that they can be displayed separately

    const innerTransitionMetals = displayedElements.filter(
      element =>
        element.category === "lanthanide" || element.category === "actinide"
    );

    const normalElements = displayedElements.filter(
      element =>
        element.category !== "lanthanide" && element.category !== "actinide"
    );
    //=============================================================================================================

    return (
      <Layout>
        <SearchBy
          term={this.state.term}
          handleRadioButton={this.handleRadioButton}
        />
        <Input handleInputChange={this.handleInputChange} />
        <div
          className={`${
            this.state.name && this.state.symbol ? "center" : "container"
          }`}
        >
          {normalElements.length === 0 ? (
            <p>No Match</p>
          ) : (
            normalElements.map(element => (
              <Element
                key={element.name}
                name={element.name}
                symbol={element.symbol}
                mass={element.atomic_mass.toFixed(0)}
                number={element.number}
                category={element.category}
                group={element.group}
              />
            ))
          )}
        </div>
        <div className={`innerTransitionMetals ${searchActive && "center"}`}>
          {innerTransitionMetals.map(element => (
            <Element
              key={element.name}
              name={element.name}
              symbol={element.symbol}
              mass={element.atomic_mass.toFixed(0)}
              number={element.number}
              category={element.category}
              group={element.group}
            />
          ))}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    dataJson {
      elements {
        name
        symbol
        atomic_mass
        number
        category
        group
      }
    }
  }
`;

export default IndexPage;
