import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CustomerPage = () => {
  const navigate = useNavigate();

  const handleViewCustomers = () => {
    navigate("/view-customers");
  };

  const handleAddCustomer = () => {
    navigate("/add-customer");
  };

  return (
    <div className="container">
      <h1>Customer Management</h1>
      <div className="card-container">
        <div className="card" onClick={handleViewCustomers}>
          <h2>View Customers</h2>
          <p>See all customers in the system.</p>
        </div>
        <div className="card" onClick={handleAddCustomer}>
          <h2>Add Customer</h2>
          <p>Add a new customer to the system.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
