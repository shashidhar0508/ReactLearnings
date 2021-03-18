// this.inputRef = React.createRef()

// let name = this.inputRef.current.value;
// this.inputRef.current.value = "shashi";
// this.inputRef.current.value.focus()

// render(){
//     return(
//         <>
//             <input
//             type="text"
//             value={this.state.data}
//             onChange={(e) => this.updateState(e)}
//             ref={this.inputRef}
//             id="username"
//             />
//         </>
//     )
// }

import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class RefDemo extends Component {
  state = {
    data: "react",
  };

  updateState(e) {
    this.setState({ data: e.target.value });
  }

  clearInput() {
    alert(this.refs.username.value);
    this.setState({ data: " " });
    this.refs.username.focus();
  }
  render() {
    return (
      <>
        Name :{" "}
        <input
          type="text"
          value={this.state.data}
          onChange={(e) => this.updateState(e)}
          ref="username"
          id="username"
        />
        <br />
        Password : <input type="password" ref="pwd" id="password" />
        <button onClick={() => this.clearInput()}>Clear</button>
        <h3>{this.state.data}</h3>
      </>
    );
  }
}
