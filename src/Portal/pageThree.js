import React, { Component } from "react";
import Link from "react-router-dom";

export default class pageThree extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={"/"}>Go to First Page</Link>
        </h1>
      </div>
    );
  }
}
