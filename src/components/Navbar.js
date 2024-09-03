import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/customers">Customers</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cards">Cards</Link>
        </li>
        <li className="navbar-item">
          <Link to="/transactions">Transactions</Link>
        </li>
        <li className="navbar-item">
          <Link to="/billpay">Bill Pay</Link>
        </li>
        {onLogout && (
          <li className="navbar-item">
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
