import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleLogin(event) {
    event.preventDefault();
    alert("Thanks for submiting");
    if (this.props.jwttoken != "") {
      this.props.history.push("/cars");
    }
  }
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form
          className="container bg-danger"
          onSubmit={(e) => this.handleLogin(e)}
        >
          userName : <input type="text" value="Murthy" />
          <br />
          <br />
          Password : <input type="password" value="welcome" />
          <br />
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    );
  }
}
