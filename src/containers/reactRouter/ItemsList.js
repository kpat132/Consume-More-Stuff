import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../../components/searchbar";

const ItemsList = props => {
  return (
    <div className="items-list">
      <SearchComponent />
      {props.items.map(item => {
        const itemId = item.id;
        return (
          <div key={itemId} className="item-link">
            <Link to={`/items/${itemId}`}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
