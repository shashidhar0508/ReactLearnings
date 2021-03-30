import React, { Component } from "react";
import updatedComponent from "./withIncrement";
class ClickCounter extends Component {
  state = {
    count: 0,
  };

  onButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
    // this.setState((prevState) => {
    //   return { count: prevState + 1 };
    // });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.onButtonClick}>Click</button>
        <h2>{count}</h2>
        <h2>Name from HOC : {this.props.name}</h2>
      </div>
    );
  }
}

//Calling HOC(enhancedComponent) by passing our original component
export default updatedComponent(ClickCounter);
