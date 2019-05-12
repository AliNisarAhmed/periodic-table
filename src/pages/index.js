import React from "react";
import { graphql } from "gatsby";

import Element from "../components/Element";

import Layout from "../components/layout";

import "./main.scss";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { data } = this.props;
    const { elements } = data.dataJson;

    const displayedElements = elements.filter(element => {
      return element.name.toLowerCase().includes(this.state.name);
    });

    const innerTransitionMetals = displayedElements.filter(
      element =>
        element.category === "lanthanide" || element.category === "actinide"
    );

    const normalElements = displayedElements.filter(
      element =>
        element.category !== "lanthanide" && element.category !== "actinide"
    );

    return (
      <Layout>
        <input
          value={this.state.name}
          onChange={this.handleInputChange}
          name="name"
        />
        <div className="container">
          {normalElements.map(element => (
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
        <div className="innerTransitionMetals">
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
