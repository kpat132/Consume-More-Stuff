import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../components/Home";
import Items from "./Items";
import Item from "./Item";

const Main = props => (
  <main className="page-content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/items/:id" component={Item} />
      <Route path="/items" component={Items} />
    </Switch>
  </main>
);
export default Main;
