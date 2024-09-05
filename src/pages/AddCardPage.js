import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/Cardform";
import "../App.css";
import useCardsStore from "../store/useCardStore";

const AddCardPage = () => {
  const { addCard } = useCardsStore();
  const [formStatus, setFormStatus] = useState("idle");
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/cards");
  };

  const handleViewCardsClick = () => {
    navigate("/view-cards");
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setFormStatus("loading");

    setTimeout(() => {
      addCard(values);
      setFormStatus("success");
      setSubmitting(false);
    }, 2000);
  };
  useEffect(() => {
    if (formStatus === "success") {
      const timer = setTimeout(() => {
        navigate("/view-cards");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [formStatus, navigate]);

  return (
    <div className="container">
      <button onClick={handleBackClick} className="back-button">
        Back
      </button>
      <button onClick={handleViewCardsClick} className="back-button">
        View Cards
      </button>
      <h1>Add Card</h1>
      <CardForm onSubmit={handleSubmit} />
      {formStatus === "loading" && <p>Sending...</p>}
      {formStatus === "success" && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default AddCardPage;
