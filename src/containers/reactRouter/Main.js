import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../components/Home";
import Items from "./Items";
import Item from "./Item";
import AddItem from "../AddItem";
import AutoList from "./AutoList";
import Categories from "./Categories";

const Main = props => (
  <main className="page-content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/items/:id" component={Item} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/auto" component={Categories} />
      <Route exact path="/addItem" component={AddItem} />
    </Switch>
  </main>
);
export default Main;
