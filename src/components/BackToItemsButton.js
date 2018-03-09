import React from "react";
import { Link } from "react-router-dom";

export const BackToItemsButtonComponent = () => {
  return (
    <div className="BackToItemsButtonClass">
      <a href="http://localhost:3000/items">
        <button className="BackToItemsButton-container" type="submit">
          Back
        </button>
      </a>
    </div>
  );
};

export default BackToItemsButtonComponent;
