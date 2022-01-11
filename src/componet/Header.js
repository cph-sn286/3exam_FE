import { NavLink } from "react-router-dom";
import { useState } from "react";
import facade from "../apiFacade";
import LoggedIn from "./login/LoggedIn";
import LogIn from "./login/LogIn";

function Header() {

  


  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/owners">
            Owners
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/harbours">
            Harbours
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-book">
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/find-book">
            Find Book
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/create-boat">
            Create Boat
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
