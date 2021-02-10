import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Todo, Auth } from "./pages";

import { Layout } from "./component/Layout.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Layout children={<Auth />} />
            </Route>
            <Route path="/todo">
              <Layout children={<Todo />} />
            </Route>

            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
