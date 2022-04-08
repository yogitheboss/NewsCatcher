import React, { Component } from "react";
import loading from "../loading.gif";
export default class spinner extends Component {
  render() {
    return (
      <div className="spinner-contain">
        <img src={loading} alt="loading" className="spinner" />
      </div>
    );
  }
}
