import React from "react";
import { Link } from "react-router-dom";

export const EditItemButtonComponent = () => {
  return (
    <div className="editItemButtonClass">
      <a href="http://localhost:3000/editItem">
        <button className="EditItemButton" type="submit">
          Edit Item
        </button>
      </a>
    </div>
  );
};

export default EditItemButtonComponent;