import React from "react";

//1. Create the context object with React.createContext() with or without initial state
const MyContextStore = React.createContext(); //without initial data
const MyAuthContext = React.createContext({ jwttoken: "", username: "" }); //with initial data

//2. Create Provider Component  (provider/subscriber(s))
class MyProvider extends React.Component {
  state = {
    name: "shashi",
    job: "software",
    salary: 25000,
  };

  render() {
    return (
      //3. For creating provider
      //Here value is Json
      // We are declaring here using key value pairs
      <MyContextStore.Provider
        value={{
          //data
          state: this.state,

          //function
          //incrementSalary : () => fetch(url).then
          incrementSalary: () =>
            this.setState({
              salary: this.state.salary + 1000,
            }),
        }}
      >
        {this.props.children}
      </MyContextStore.Provider>
    );
  }
}

// Below is the container and above is the provider
//4. Writing main app in Myprovider to access the context
export default class ContextDemo extends React.Component {
  render() {
    return (
      //below is the provider and we can have any number of providers
      <MyProvider>
        <div className="bg-success">
          <h2 className="bg-info">React Context API Demo</h2>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

const Family = () => {
  return (
    <div>
      {/* //Here all the components below can access the data */}
      <Person />
    </div>
  );
};

class Person extends React.Component {
  render() {
    return (
      <div>
        <MyContextStore.Consumer>
          {/* //Whoever wants the data can access here */}
          {
            // below context is pointing to  MyContextStore.Provider
            (contextPointer) => (
              <>
                <h3 className="bg-primary">Person Details</h3>
                <p>Hi! {contextPointer.state.name}</p>
                <p className="bg-danger">
                  Salary: {contextPointer.state.salary}
                </p>
                <button
                  className="btn-primary"
                  onClick={contextPointer.incrementSalary}
                >
                  Increment salary
                </button>
              </>
            )
          }
        </MyContextStore.Consumer>
      </div>
    );
  }
}
