import React, { Component } from "react";

import NotFound from "./NotFound/NotFound";
import { Dynamic } from "./Dynamic";

//Early Loading
/* import Home from "./Home/Home";
import Maps from "./Maps/Maps";
import Blog from "./Blog/Blog";
 */

import "./App.css";
import { Link, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Profile from "./Profile/Profile";

//Lazy loading with HOC(Higher Order Component) Start
/* HOC takes your component as parameter, add extra work , 
and return same component without spoiling your component state */
import asyncComponent from "./AsyncComponent";

// const Home = React.lazy(() =>
//   import("./Home/Home").then((module) => module.default)
// );

const Home = asyncComponent(() =>
  import("./Home/Home").then((module) => module.default)
);

const Maps = asyncComponent(() =>
  import("./Maps/Maps").then((module) => module.default)
);

const Blog = asyncComponent(() =>
  import("./Blog/Blog").then((module) => module.default)
);
//Lazy loading with HOC END
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <h2>Early and Lazy Loading by Shashi</h2>
            <nav className="navbar container">
              <div className="navbar-end">
                <Link to="/">
                  <span className="navbar-item">Home</span>
                </Link>
                <Link to="/maps">
                  <span className="navbar-item">Maps</span>
                </Link>
                <Link to="/blog">
                  <span className="navbar-item">Blog</span>
                </Link>
                <Link to="/profile">
                  <span className="navbar-item">Profile</span>
                </Link>
              </div>
            </nav>
          </header>

          <section className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/maps" component={Maps} />
              <Route path="/blog" component={Blog} />
              <Route path="/profile" component={Dynamic} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}
