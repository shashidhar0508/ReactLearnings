// HOC is design pattern where a function takes
// other function or component as an argument
// and returns a new enhanced component
// with additional state and functionality(logic) - Ajax logic

// const ehnacedComponent = HOC(originalComponent)

import React from "react";

const updatedComponent = (originalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <originalComponent name="shashiHOC" />;
    }
  }
  return NewComponent;
};

export default updatedComponent;

// originalComponent => name of the function which is passed
// NewComponent is returned with extra data "shashi"
