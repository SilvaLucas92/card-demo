import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../redux/slices/cardSlice";
import CardForm from "../components/Cardform";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddCardPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  const status = useSelector((state) => state.card.status);
  const error = useSelector((state) => state.card.error);
  const [formStatus, setFormStatus] = useState("idle");

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchCards());
  //   }
  // }, [status, dispatch]);

  const handleSubmit = (values, { setSubmitting }) => {
    setFormStatus("loading");
    setTimeout(() => {
      console.log("Form values:", values);
      setFormStatus("success");
      setSubmitting(false);
    }, 2000); // Mocking a 2-second submit delay
  };

  return (
    <div className="container">
      <button onClick={handleBackClick} className="back-button">
        Back
      </button>
      <h1>Add Card</h1>
      <CardForm onSubmit={handleSubmit} />
      {formStatus === "loading" && <p>Sending...</p>}
      {formStatus === "success" && <p>Form submitted successfully!</p>}
      {/* {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {cards.map((card) => (
            <li key={card.id}>
              {card.cardNumber} - {card.cardHolderName}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>{error}</p>} */}
    </div>
  );
};

export default AddCardPage;
