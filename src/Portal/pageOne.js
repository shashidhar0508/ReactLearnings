import React, { Component } from "react";
import Link from "react-router-dom";

export default class pageOne extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={"/pg2"}>Go to second Page</Link>
        </h1>
      </div>
    );
  }
}
