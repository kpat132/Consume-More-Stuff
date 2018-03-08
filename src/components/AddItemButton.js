import React from "react";
import { Link } from "react-router-dom";

export const AddItemButtonComponent = () => {
  return (
    <button className="AddItemButton-container" type="submit">
      <Link className="addItemLink" to="/addItem">
        Create Item
      </Link>
    </button>
  );
};

export default AddItemButtonComponent;
