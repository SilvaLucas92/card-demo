import React from "react";
import "./Table.css";

const ViewCardsPage = () => {
  const cards = [
    {
      number: "1234 5678 9012 3456",
      holderName: "John Doe",
      expirationDate: "12/25",
      type: "Visa",
    },
    {
      number: "9876 5432 1098 7654",
      holderName: "Jane Smith",
      expirationDate: "08/24",
      type: "Mastercard",
    },
  ];

  return (
    <div className="table-container">
      <h2>Card Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Card Holder Name</th>
            <th>Expiration Date</th>
            <th>Card Type</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card, index) => (
            <tr key={index}>
              <td>{card.number}</td>
              <td>{card.holderName}</td>
              <td>{card.expirationDate}</td>
              <td>{card.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCardsPage;
