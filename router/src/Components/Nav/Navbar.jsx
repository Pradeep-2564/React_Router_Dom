import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <ul className="nav-container">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "active-link": "no-active" }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? "active-link": "no-active" }>About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link": "no-active" }>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
