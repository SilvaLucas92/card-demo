import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillPays } from "../redux/slices/billPaySlice";
import BillPayForm from "../components/Billpayform";
import { useNavigate } from "react-router-dom";

import useTransactionsStore from "../store/useTransactionStore";
import "../App.css";

const BillPayPage = () => {
  const dispatch = useDispatch();
  const billPays = useSelector((state) => state.billPay.billPays);
  const status = useSelector((state) => state.billPay.status);
  const error = useSelector((state) => state.billPay.error);
  const [formStatus, setFormStatus] = useState("idle");
  const addTransaction = useTransactionsStore((state) => state.addTransaction);

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchBillPays());
  //   }
  // }, [status, dispatch]);

  const handleBackClick = () => {
    navigate("/");
  };
  const handleViewTransactionClick = () => {
    navigate("/view-transactions");
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setFormStatus("loading");
    setTimeout(() => {
      console.log("Form values:", values);
      addTransaction(values);
      setFormStatus("success");
      setSubmitting(false);
    }, 2000); // Mocking a 2-second submit delay
  };

  useEffect(() => {
    if (formStatus === "success") {
      const timer = setTimeout(() => {
        navigate("/view-transactions");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [formStatus, navigate]);

  return (
    <div className="container">
      <button onClick={handleBackClick} className="back-button">
        Back
      </button>
      <button onClick={handleViewTransactionClick} className="back-button">
        View Bill Pay
      </button>
      <h1>Bill Pay</h1>
      <BillPayForm onSubmit={handleSubmit} />
      {formStatus === "loading" && <p>Sending...</p>}
      {formStatus === "success" && <p>Form submitted successfully!</p>}
      {/* {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {billPays.map((billPay) => (
            <li key={billPay.id}>
              {billPay.description} - ${billPay.amount}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>{error}</p>} */}
    </div>
  );
};

export default BillPayPage;
