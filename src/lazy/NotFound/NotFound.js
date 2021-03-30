import React, { Component } from "react";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className="error">
        <p>404</p>
        <p>Page Module Not Found</p>
      </div>
    );
  }
}
