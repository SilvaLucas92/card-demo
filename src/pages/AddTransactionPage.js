import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../redux/slices/transactionSlice";
import "../App.css";
import TransactionForm from "../components/Transactionform";
import { useNavigate } from "react-router-dom";

const AddTransactionPage = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const status = useSelector((state) => state.transaction.status);
  const error = useSelector((state) => state.transaction.error);
  const [formStatus, setFormStatus] = useState("idle");

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchTransactions());
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
      <h1>Transactions</h1>
      <TransactionForm onSubmit={handleSubmit} />
      {formStatus === "loading" && <p>Sending...</p>}
      {formStatus === "success" && <p>Form submitted successfully!</p>}
      {/* {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description} - ${transaction.amount}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>{error}</p>} */}
    </div>
  );
};

export default AddTransactionPage;
