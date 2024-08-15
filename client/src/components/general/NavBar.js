import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  console.log("NavBar is rendering");
  return (
    <nav className="main-navbar">
      <div className="nav-left">
        <h1>
          <Link to="/">
            <i className="fas fa-store"></i> e-Shoping
          </Link>
        </h1>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/merchants">Merchants</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
