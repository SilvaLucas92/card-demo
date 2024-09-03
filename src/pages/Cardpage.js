import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../redux/slices/cardSlice";
import CardForm from "../components/Cardform";
import "../App.css";

const CardPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  const status = useSelector((state) => state.card.status);
  const error = useSelector((state) => state.card.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCards());
    }
  }, [status, dispatch]);

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log("Form values:", values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <h1>Cards</h1>
      <CardForm onSubmit={handleSubmit} />
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {cards.map((card) => (
            <li key={card.id}>
              {card.cardNumber} - {card.cardHolderName}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>{error}</p>}
    </div>
  );
};

export default CardPage;
