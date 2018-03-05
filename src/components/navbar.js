import React from "react";
import { Link } from "react-router-dom";

export const NavComponent = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="Messages.asp">Messages</a>
        </li>
        <li>
          <a href="settings.asp">Settings</a>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">
              <Link to="/items">Catagories</Link>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <a href="">Auto</a>
              <a href="#">Furniture</a>
              <a href="#">Clothes</a>
              <a href="#">Electronics</a>
              <a href="#">Misc...</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
