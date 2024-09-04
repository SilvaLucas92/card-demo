import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Asegúrate de tener este archivo CSS

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Dashboard</h1>
      <div className="card-grid">
        <div className="home-card">
          <h3>Customers</h3>
          <p>Manage and view customer information.</p>
          <Link to="/customers" className="card-button">
            Go to Customers
          </Link>
        </div>
        <div className="home-card">
          <h3>Cards</h3>
          <p>View and manage credit/debit cards.</p>
          <Link to="/cards" className="card-button">
            Go to Cards
          </Link>
        </div>
        <div className="home-card">
          <h3>Transactions</h3>
          <p>View and manage transactions.</p>
          <Link to="/transactions" className="card-button">
            Go to Transactions
          </Link>
        </div>
        <div className="home-card">
          <h3>Bill Pay</h3>
          <p>Manage bill payments.</p>
          <Link to="/billpay" className="card-button">
            Go to Bill Pay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
