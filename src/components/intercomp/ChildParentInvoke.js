import React, { Component } from "react";
import Content from "./Content";
import ContentSibling from "./ContentSibling";

export default class ChildParentInvoke extends Component {
  state = "Initial data";

  updateState(event) {
    this.setState({ data: event.target.value });
    console.log("event.target.value : ", event.target.value);
  }

  render() {
    console.log("this.state.data : ", this.state);
    return (
      <>
        <h1 className="text-success">Parent Component</h1>
        <h2 className="text-danger bg-info">State data: {this.state.data}</h2>
        <br />
        <h2 className="bg-warning">Child C omponent</h2>
        <Content
          myDataProp={this.state.data}
          updateSateProp={(event) => this.updateState(event)}
        />
        <ContentSibling data={this.state.data} />
      </>
    );
  }
}
