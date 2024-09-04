import React from "react";
import "./Table.css";
import useTransactionsStore from "../store/useTransactionStore";

const ViewTransactionsPage = () => {
  const transactions = useTransactionsStore((state) => state.transactions);

  return (
    <div className="table-container">
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
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransactionsPage;
