import React from "react";

import ElementStyles from "./Element.module.scss";

export default function Element(props) {
  const boxStyles = `
    ${ElementStyles.box} 
    ${ElementStyles[props.symbol.toLowerCase()]} 
    ${ElementStyles[props.group]}
  `;

  return (
    <div className={boxStyles}>
      <span className={ElementStyles.mass}>{props.mass}</span>
      <span className={ElementStyles.number}>{props.number}</span>
      <span className={ElementStyles.symbol}>{props.symbol}</span>
      <span className={ElementStyles.name}>{props.name}</span>
    </div>
  );
}
