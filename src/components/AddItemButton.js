import React from "react";
import { Link } from "react-router-dom";

export const AddItemButtonComponent = () => {
  return (
    <div className="AddItemButton-container">
      <button type="submit">
        <Link className="addItemLink" to="/addItem">
          Create Item
        </Link>
      </button>
    </div>
  );
};

export default AddItemButtonComponent;
