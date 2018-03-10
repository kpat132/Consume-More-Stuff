import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../components/Home";
import Items from "./Items";
import Item from "./Item";
import Register from "../../components/Register";
import Login from "../../components/Login";
import AddItem from "../AddItem";
import EditItem from "../EditItem";
import Categories from "./Categories";
import Settings from "../Settings";
import NoMatch from "../../components/NoMatch";

const Main = props => (
  <main className="page-content">
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/items/:id" component={Item} />

      <Route exact path="/items" component={Items} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/addItem" component={AddItem} />
      <Route exact path="/EditItem" component={EditItem} />
      <Route exact path="/categories/:name" component={Categories} />
      <Route component={NoMatch}/>
    </Switch>
  </main>
);
export default Main;
