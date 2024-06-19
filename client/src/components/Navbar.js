import React from "react";
import { NavLink } from "react-router-dom";
import "./navLogin.css";
const Navbar = () => {
  return (
    <div>
      <header>
       <NavLink to={"/home"}><h2 className="logo">Logo</h2></NavLink>
        <nav className="navigation">
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
          <NavLink to={"/mess"}>Mess</NavLink>
          <NavLink to={"/hostel"}>Hostel-PG</NavLink>
          <NavLink to={'/pay'}>Pay</NavLink>
          <NavLink to={'/login'}><button className="btnLogin-popup">Login</button></NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
