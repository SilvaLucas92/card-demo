import React from "react";
import { useNavigate } from "react-router-dom";
import useCustomerStore from "../store/useCustomerStore";
import "./Table.css";

const ViewCustomersPage = () => {
  const { customers } = useCustomerStore();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/customers");
  };

  const handleAddCustomerClick = () => {
    navigate("/add-customer");
  };

  return (
    <div className="table-container">
      <div className="button-container">
        <button onClick={handleBackClick} className="back-button">
          Back
        </button>
        <button onClick={handleAddCustomerClick} className="back-button">
          Add Customer
        </button>
      </div>
      <h2>Customer Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address Line 1</th>
            <th>State Code</th>
            <th>Country Code</th>
            <th>Zip Code</th>
            <th>Phone Number 1</th>
            <th>SSN</th>
            <th>Government Issued ID</th>
            <th>Date of Birth</th>
            <th>EFT Account ID</th>
            <th>Primary Card Indicator</th>
            <th>FICO Credit Score</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.addressLine1}</td>
              <td>{customer.stateCode}</td>
              <td>{customer.countryCode}</td>
              <td>{customer.zipCode}</td>
              <td>{customer.phoneNumber1}</td>
              <td>{customer.ssn}</td>
              <td>{customer.govtIssuedId}</td>
              <td>{customer.dob}</td>
              <td>{customer.eftAccountId}</td>
              <td>{customer.primaryCardIndicator}</td>
              <td>{customer.ficoCreditScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCustomersPage;
