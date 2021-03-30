import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Customers } from "./Customers";
import Cars from "./Cars";
import CarDetails from "./CarDetails";
import { Greet } from "./Greet";
import Login from "./Login";

export const Layout = () => (
  <div>
    <nav>
      {/* equal to anchor tag in HTML 
       exact is used to check for full URL after port number */}
      <Link className="nav" exact to="/">
        Home
      </Link>
      <Link className="nav" exact to="/users">
        Customers
      </Link>
      <Link className="nav" exact to="/cars">
        Cars
      </Link>
      <Link className="nav" exact to="/login">
        Login
      </Link>
      <Link className="nav" exact to="/greet/shashi">
        Greet
      </Link>
    </nav>
    // main is place where we keep router views
    <main className="container">
      <Switch>
        {/*<Home></Home> we can also give below line like this,but dynamically components are loaded here using below line*/}

        <Route path="/" exact component={Home}></Route>
        <Route path="/users" component={Customers}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/cars" component={Cars}></Route>
        <Route path="/carDetails/:carId" component={CarDetails}></Route>
        <Route
          path="/greet/:username"
          render={(props) => <Greet {...props} />}
        />
        <Route component={NotFound}></Route>
      </Switch>
    </main>
  </div>
);

const NotFound = () => <h1>Sorry Worng URL</h1>;
