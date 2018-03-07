import React from "react";
import { Link } from "react-router-dom";

const AutoList = props => {
  console.log("MAPPING", props);
  return props.categories
    .filter(x => {
      let autos = null;
      if (x.name === "Auto") {
        // console.log(">>>>>>>>>>", x.name);
        autos = x.name;
      }
      console.log(">>>>", autos);
      return autos;
    })
    .map(auto => {
      return (
        <div className="auto-list">
          <div key={props.id} className="auto-link">
            {console.log("TEST", props.categories.items)}
            <Link to={`/items/${props.categories.id}`}>
              {auto.items[0].name}
            </Link>
          </div>
        </div>
      );
    });
};

export default AutoList;
