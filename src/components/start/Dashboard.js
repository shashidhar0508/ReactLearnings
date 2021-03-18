// StateFul Functional Components

import React from "react";
import ContextDemo from "../contextAPI/ContextDemo";
import TableMaterialUI from "../DemoTablesMaterialUI/TableMaterialUI";
import Button from "../hooks/hook1";
import Button1 from "../hooks/hook2";
import DataLoader from "../hooks/hook3";
import ChildParentInvoke from "../intercomp/ChildParentInvoke";
import CompLifeCycle from "../lifecycle/CompLifeCycle";
import RefDemo from "../propsstates/RefDemo";

// import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    <h2>Hi</h2>;
    return <Completionist />;
  } else {
    // Render a countdown
    <h2>Hello</h2>;
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

//In StateFul Functional Components props will be taken in constructor
// In "stateless" we can return directly but in "stateful" component we need to render then return
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //In constructor only we can intial state
      // state is json value
      //Intial state component applicable only to this component
      //props can't be modified
      job: "engineer",
    };
  }

  render() {
    return (
      <div>
        <h1 className="bg-info text-center">Welcome to {this.props.company}</h1>
        {/* If we this.state whole json object will be passed*/}
        <child desg={this.state.job} />
        <RefDemo />

        {/* <ChildParentInvoke /> */}

        {/* <ContextDemo /> */}

        {/* <Button />
        <Button1 />
        <DataLoader /> */}

        <CompLifeCycle />

        {/* <TableMaterialUI /> */}

        {/* TEST ENDS IN :
        <h2>
          {" "}
          <Countdown date={Date.now() + 10000} />
        </h2> */}
      </div>
    );
  }
}

//If we pass props it takes that value or else it takes the below default value
Dashboard.defaultProps = {
  company: "Evoke Technologies",
};
