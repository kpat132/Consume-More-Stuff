import React from "react";

export const NavComponent = () => {
  return (
    <nav>
      <ul class="nav">
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="Messages.asp">Messages</a>
        </li>
        <li>
          <a href="settings.asp">Settings</a>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">
              Catagories
              <i class="fa fa-caret-down" />
            </button>
            <div class="dropdown-content">
              <a href="#">Auto</a>
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
