import React from "react";

import { Link } from "react-router-dom";

export const NavComponent = ({ categories }) => {
  
  return (
    <nav>
      <ul className="navbar">
        <li className="home-link">
          <Link to="/">Home</Link>
        </li>
        <li className="messages-link">
          <a href="Messages.asp">Messages</a>
        </li>
        <li className="settings-link">
          {/* <a href="settings.asp">Settings</a> */}
          <Link to="/settings">Settings</Link>
        </li>
        <li className="items-link">
          <Link to="/items">Items</Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
              {categories.map(category => {
                return (
                  <div className="singleDropDown" key={category.id}>
                    <Link to={"/categories/" + category.name}>
                      {category.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
