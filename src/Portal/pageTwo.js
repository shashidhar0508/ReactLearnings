import React, { Component } from "react";
import Link from "react-router-dom";

export default class pageTwo extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={"/pg3"}>Go to Third Page</Link>
        </h1>
      </div>
    );
  }
}
