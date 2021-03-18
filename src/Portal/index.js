import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";
import pageOne from "./pageOne";
import pageThree from "./pageThree";
import pageTwo from "./pageTwo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getSeconds(), //State variable of parent that is passed to child components
    };
  }

  componentDidMount() {
    this.startTime();
  }

  startTime = () => {
    let now = new Date();
    let seconds = now.getSeconds();
    this.setState({
      time: seconds,
    });
    var t = setTimeout(this.startTime, 500);
  };
  render() {
    return (
      <div>
        <MusicPlayer parentState={this.state.time} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" Component={pageOne} />
            <Route path="/pg2" Component={pageTwo} />
            <Route path="/pg3" Component={pageThree} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
