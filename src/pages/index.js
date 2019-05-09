import React from "react";
import { graphql } from "gatsby";

import Element from "../components/Element";

import Layout from "../components/layout";

import "./main.scss";

const IndexPage = ({ data }) => {
  console.log(data);
  const { elements } = data.dataJson;
  const normalElements = elements.filter(
    element =>
      element.category !== "lanthanide" && element.category !== "actinide"
  );
  console.log("filtered", normalElements);
  return (
    <Layout>
      <div className="container">
        {normalElements.map(element => (
          <Element
            key={element.name}
            name={element.name}
            symbol={element.symbol}
            mass={element.atomic_mass.toFixed(0)}
            number={element.number}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    dataJson {
      elements {
        name
        symbol
        atomic_mass
        number
        category
      }
    }
  }
`;

export default IndexPage;
