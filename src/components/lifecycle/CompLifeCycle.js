import React, { Component } from "react";

export default class CompLifeCycle extends Component {
  constructor(props) {
    //1. Initialization phase
    super(props);
    this.state = {
      data: 0,
      msg: "Evoke technologies",
    };
  }

  setNewNumber(e) {
    this.setState({ data: this.state.data + 1 });
  }

  //mounting phase - initial render - didmount
  //2. render
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.setNewNumber(e);
          }}
        >
          Increment
        </button>
        <h2>{this.state.msg}</h2>
        <ContentChild myNumber={this.state.data}></ContentChild>
      </div>
    );
  }
}

//child component
class ContentChild extends Component {
  //state can be called as replacement of constructor because it is available from starting
  state = { name: "shashi" };
  //   console.log(props.myNumber);    // output=0

  // Deprecated
  componentWillMount() {
    console.log("In Will mount : ", this.props.myNumber); // output=0
  }

  componentDidMount() {
    //Used for AJAx calls to REST API to invoke initial data
    //to load local storage data
    //subscribe to web socket/ create custom events
    console.log("In Did mount : ", this.props.myNumber); // output=0
  }

  //replacement of componentWillReceiveProps is static getDerivedStateFromProps()
  static getDerivedStateFromProps(props, state) {
    // If the current state or parent state changes then this function will be called
    // allows to get props from parent everytime the props are changed in parent
    // can also get state from this particular component
    // It is a singleton so static
    //1.best place to validate state and props

    //2. best place to make ajax calls to rest api

    console.log("In getDerivedStateFromProps: ", props.myNumber);
    console.log("In getDerivedStateFromProps: ", state.name);

    //3. we can also add new state here => augementing state
    return { counter: 10 };
  }

  shouldComponentUpdate(props, state) {
    // It is called before render based on return we can show or not show render
    // This is called before updating the real DOM, before calling render method  return with true or false to render
    // used to decide wether to re-render component or its children or not based on condition

    if (props.myNumber > 5 && this.state.name === "shashi") {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="bg-warning">
        <h2 id="txt1">Text : {this.props.myNumber}</h2>
        <h2 id="txt1">Text 1 : {this.state.name}</h2>
      </div>
    );
  }

  componentDidUpdate() {
    // It executes after render
    // Here we can access the real DOM
    console.log(
      "componentDidUpdate : ",
      document.getElementById("txt1").innerText
    );
  }

  componentDidCatch(error) {
    //post the error message to db with REST API call
    console.log("fail with reason: ", error);
  }

  componentWillUnmount() {
    // used to avoid memory leak - unsubscribe to web socket, unregister event
    //clean state or cache
    console.log("Component unmounted");
  }
}
