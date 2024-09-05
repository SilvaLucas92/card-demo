import React from "react";
import useCardsStore from "../store/useCardStore";
import { useNavigate } from "react-router-dom";
import "./Table.css";

const ViewCardsPage = () => {
  const { cards } = useCardsStore();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/cards");
  };

  const handleAddCardClick = () => {
    navigate("/add-card");
  };

  return (
    <div className="table-container">
      <div className="button-container">
        <button onClick={handleBackClick} className="back-button">
          Back
        </button>
        <button onClick={handleAddCardClick} className="back-button">
          Add Card
        </button>
      </div>
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
              <td>{card.cardNumber}</td>
              <td>{card.cardHolderName}</td>
              <td>{card.expirationDate}</td>
              <td>{card.cardType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCardsPage;
