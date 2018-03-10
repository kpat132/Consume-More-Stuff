import React from "react";
import { handleCloseNav } from "../containers/app/App";
import { Link } from "react-router-dom";

export const NavComponent = ({ categories, nav }) => {
  return (
    <div id="mySidenav" className="sidenav mySidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={nav}>
        &times;
      </a>
      <a>
        <Link to="/">Home</Link>
      </a>

      <a href="Messages.asp">Messages</a>
      <a>
        <Link to="/settings">Settings</Link>
      </a>
      <a>
        <Link to="/items">Items</Link>{" "}
      </a>
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {categories.map(category => {
            return (
              <a>
                <div className="singleDropDown" key={category.id}>
                  <Link to={"/categories/" + category.name}>
                    {category.name}
                  </Link>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavComponent;

{
  /* <div className="navbar">
  <span onclick="openNav()">open</span>
  <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">
    &times;
  </a>
  <li className="home-link">
  </li>
  <li className="messages-link">
    <a href="Messages.asp">Messages</a>
  </li>
  <li className="settings-link">
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
</div> */
}
