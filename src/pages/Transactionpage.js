import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { fetchTransactions } from "../redux/slices/transactionSlice";
import "../App.css";

const TransactionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector((state) => state.transaction.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTransactions());
    }
  }, [status, dispatch]);

  const handleViewTransactions = () => {
    navigate("/view-transactions");
  };

  const handleAddTransaction = () => {
    navigate("/billpay");
  };

  return (
    <div className="container">
      <h1>Transactions Management</h1>
      <div className="card-container">
        <div className="card" onClick={handleViewTransactions}>
          <h2>View Transactions</h2>
          <p>See all transactions in the system.</p>
        </div>
        <div className="card" onClick={handleAddTransaction}>
          <h2>Add Transaction</h2>
          <p>Add a new transaction to the system.</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
