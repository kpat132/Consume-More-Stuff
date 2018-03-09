import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../../components/searchbar";

const ItemsList = props => {
  console.log(props)
  return (
    <div className="items-container">
      <div className="search-bar">
        <SearchComponent />
      </div>
      <div className="itemlist-title">
      <h1>Published Items</h1>
      </div>
        <div className="items-list">
        
          {props.items.map(item => {
            const itemId = item.id;
            return (
              <div className="list-items">
                <ul key={itemId} className="item-link">
                  <Link to={`/items/${itemId}`}>{item.name}</Link>
                </ul>
                <div className='item-list-content'>
                  {/* {item.description}
                  <br/>
                  {item.price} */}
                </div>
                {/* {console.log(item.name)} */}
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default ItemsList;
