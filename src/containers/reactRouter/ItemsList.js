import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../../components/searchbar";

const ItemsList = props => {
  return (
    <div className="items-container">
      <div className="search-bar">
        <SearchComponent />
      </div>
      <div className="items-list">
        {props.items.map(item => {
          const itemId = item.id;
          return (
            <div className="list-items">
              <ul key={itemId} className="item-link">
                <Link to={`/items/${itemId}`}>{item.name}</Link>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
