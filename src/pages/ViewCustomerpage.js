import React from "react";

import "./Table.css";

const ViewCustomersPage = () => {
  const customers = [
    {
      customerId: "C001",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      stateCode: "CA",
      countryCode: "US",
      zipCode: "90001",
      phoneNumber: "555-1234",
      ssn: "123-45-6789",
      governmentId: "A1234567",
      dateOfBirth: "1980-01-01",
      eftAccountId: "EFT001",
      primaryCardIndicator: "Yes",
      ficoCreditScore: "750",
    },
    {
      customerId: "C002",
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Elm St",
      stateCode: "NY",
      countryCode: "US",
      zipCode: "10001",
      phoneNumber: "555-5678",
      ssn: "987-65-4321",
      governmentId: "B7654321",
      dateOfBirth: "1990-05-15",
      eftAccountId: "EFT002",
      primaryCardIndicator: "No",
      ficoCreditScore: "680",
    },
  ];

  return (
    <div className="table-container">
      <h2>Customer Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>State Code</th>
            <th>Country Code</th>
            <th>Zip Code</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.customerId}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.address}</td>
              <td>{customer.stateCode}</td>
              <td>{customer.countryCode}</td>
              <td>{customer.zipCode}</td>
              <td>{customer.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCustomersPage;
