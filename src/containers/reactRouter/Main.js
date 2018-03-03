import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../components/Home";

const Main = props => (
  <main className="page-content">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);
export default Main;
