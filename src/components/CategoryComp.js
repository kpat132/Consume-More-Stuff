import React from "react";

const CategoryComp = ({ name, items }) => {
  console.log(items);
  return (
    <div className="CategoryRow">
      <span className="CategoryName">{name}</span>
      <br />
      <ul className="CategoryItems">
        {items.map(item => {
          return <li className="SingleItemFromCateogor">{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CategoryComp;
