import React, { Component } from "react";
import NavBar from "./NavBar";
import CourseList from "./CourseList";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>
    );
  }
}

export default App;
