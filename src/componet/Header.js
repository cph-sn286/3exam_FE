import { NavLink } from "react-router-dom";
import { useState } from "react";
import facade from "../apiFacade";
import LoggedIn from "./login/LoggedIn";
import LogIn from "./login/LogIn";
import React from "react";

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
          <NavLink activeClassName="active" to="/auctions">
            Auctions
          </NavLink>
        </li>  <li>
          <NavLink activeClassName="active" to="/owners">
            Owners
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/info">
            info
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/boats">
            Boat
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
        <li>
        <NavLink activeClassName="active" to = "/create-auction">
          Create Auction
          </NavLink> 
          </li>
      </ul>
    </div>
  );
}

export default Header;
