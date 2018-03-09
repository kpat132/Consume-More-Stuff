import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../../components/searchbar";
import Sticky from "react-sticky-el";
import Overdrive from "react-overdrive";

const ItemsList = props => {
  console.log(props);
  return (
    <Overdrive
      id="item-to-image"
      duration={500}
      // animationDelay={1}
      style={{ display: "flex" }}
    >
      <div className="items-container">
        <Sticky bottomOffset={100}>
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
                  {/* <div className="item-list-content">
                  {/* {item.description}
                  <br/>
                {item.price} */}
                  {/* </div>  */}
                  {/* {console.log(item.name)} */}
                </div>
              );
            })}
          </div>
        </Sticky>
      </div>
    </Overdrive>
  );
};

export default ItemsList;
