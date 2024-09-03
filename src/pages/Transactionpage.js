import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../redux/slices/transactionSlice";
import TransactionForm from "../components/Transactionform";

const TransactionPage = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const status = useSelector((state) => state.transaction.status);
  const error = useSelector((state) => state.transaction.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTransactions());
    }
  }, [status, dispatch]);

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log("Form values:", values);
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm onSubmit={handleSubmit} />
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description} - ${transaction.amount}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>{error}</p>}
    </div>
  );
};

export default TransactionPage;
