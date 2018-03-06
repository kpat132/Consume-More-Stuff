import React from "react";
import AddItem from "../containers/AddItem";
import AddItemButton, { AddItemButtonComponent } from "./AddItemButton";
const Home = props => (
  <section>
    <h1>home page</h1>
    <AddItemButtonComponent />
  </section>
);
export default Home;
