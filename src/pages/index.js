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
      element.number < 57 ||
      element.number > 71 ||
      element.number < 89 ||
      element.number > 103
  );
  console.log(normalElements);
  return (
    <Layout>
      <div className="container">
        {data.dataJson.elements.map(element => (
          <Element
            key={element.name}
            name={element.name}
            symbol={element.symbol}
            mass={element.atomic_mass.toFixed(2)}
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
      }
    }
  }
`;

export default IndexPage;
