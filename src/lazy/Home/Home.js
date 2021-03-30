import React, { Component } from "react";
import Button from "../NavButton/NavButton";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="container">
            <h1 className="title">Lazy Loading</h1>
            <h2 className="subtitle">
              Demonstrating Early and Lazy loading in react
            </h2>
            <section className="bottom">
              <Button name="Go to maps page" link="/maps"></Button>
              <Button name="Go to blogs page" link="/blog"></Button>
            </section>
          </div>
        </section>
      </div>
    );
  }
}
