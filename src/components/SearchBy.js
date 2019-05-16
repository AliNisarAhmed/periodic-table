import React, { Component } from "react";

import SearchByStyles from "./SearchBy.module.scss";

export default class SearchBy extends Component {
  render() {
    return (
      <form className={SearchByStyles.searchBy}>
        <fieldset id="searchBy">
          <label>
            <input
              type="radio"
              value="name"
              name="searchBy"
              onChange={this.props.handleRadioButton}
              defaultChecked
            />
            Name:
          </label>
          <label>
            <input
              type="radio"
              value="symbol"
              name="searchBy"
              onChange={this.props.handleRadioButton}
            />
            Symbol:
          </label>
          <label>
            <input
              type="radio"
              value="number"
              name="searchBy"
              onChange={this.props.handleRadioButton}
            />
            Number:
          </label>
        </fieldset>
      </form>
    );
  }
}
