import React from "react";

import ElementStyles from "./Element.module.scss";

export default function Element(props) {
  return (
    <div className={ElementStyles.box}>
      <span className={ElementStyles.mass}>{props.mass}</span>
      <span className={ElementStyles.number}>{props.number}</span>
      <span className={ElementStyles.symbol}>{props.symbol}</span>
      <span className={ElementStyles.name}>{props.name}</span>
    </div>
  );
}
