import React from "react";
import AddItem from "../containers/AddItem";
import { Link } from "react-router-dom";

export const AddItemButtonComponent = () => {
  return (
    <div className="AddItemButton-container">
      <button type="submit">
        <Link to="/addItem">Create Item</Link>
      </button>
    </div>
  );
};

export default AddItemButtonComponent;
