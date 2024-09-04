import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CardPage = () => {
  const navigate = useNavigate();

  const handleViewCards = () => {
    navigate("/view-cards");
  };

  const handleAddCard = () => {
    navigate("/add-card");
  };

  return (
    <div className="container">
      <h1>Card Management</h1>
      <div className="card-container">
        <div className="card" onClick={handleViewCards}>
          <h2>View Cards</h2>
          <p>See all cards in the system.</p>
        </div>
        <div className="card" onClick={handleAddCard}>
          <h2>Add Card</h2>
          <p>Add a new card to the system.</p>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
