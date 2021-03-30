import React, { Component } from "react";

import { Heading } from "./Heading";
import { Layout } from "./Layout";
import { Footer } from "./Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <div>
          <Layout />
        </div>
        <Footer />
      </div>
    );
  }
}
