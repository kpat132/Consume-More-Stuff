import React from "react";
import AddItem from "../containers/AddItem";
import { Link } from "react-router-dom";

export const AddItemButtonComponent = () => {
  return (
    <div className='addItemButtonClass'>
    
      <a href='http://localhost:3000/addItem'>
        <button className="AddItemButton-container" type="submit">Add Item</button>
      </a>

    </div>

  );
};

export default AddItemButtonComponent;
