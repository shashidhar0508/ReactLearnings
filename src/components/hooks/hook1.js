//class component
import React, { Component } from "react";

export default class Button extends Component {
  state = {
    buttonText: "Click me, please",
  };

  handleClick = () => {
    this.setState(() => {
      return { buttonText: "Thanks, button been clicked" };
    });
  };

  upd;

  render() {
    const { buttonText } = this.state; //Getting one more copy(Immutability, destructuring)
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        {/* Instead of passing event like below,we can use above */}
        {/* <button onClick={(event) => updateChange(event)}</button> */}{" "}
      </div>
    );
  }
}

// Object destructuring es6
// We can create a new object and extract values here
/*
obj ={x:10, y:20, z=30}
let {x,z}=obj
console.log(z)
console.log(x)
*/
