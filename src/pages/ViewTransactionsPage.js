import React from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import useTransactionsStore from "../store/useTransactionStore";

const ViewTransactionsPage = () => {
  const transactions = useTransactionsStore((state) => state.transactions);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/transactions");
  };
  const handleAddTransactionClick = () => {
    navigate("/billpay");
  };

  return (
    <div className="table-container">
      <div className="button-container">
        <button onClick={handleBackClick} className="back-button">
          Back
        </button>
        <button onClick={handleAddTransactionClick} className="back-button">
          Add Transaction
        </button>
      </div>
      <h2>Transactions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.accountId}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransactionsPage;
