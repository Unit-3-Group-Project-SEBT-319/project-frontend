import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import App from "../App";

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  );
};

export default Index;

// Loading function?
// Landing page - sign in/auth imp here?