import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillPays } from "../redux/slices/billPaySlice";
import BillPayForm from "../components/Billpayform";
import "../App.css";

const BillPayPage = () => {
  const dispatch = useDispatch();
  const billPays = useSelector((state) => state.billPay.billPays);
  const status = useSelector((state) => state.billPay.status);
  const error = useSelector((state) => state.billPay.error);
  const [formStatus, setFormStatus] = useState("idle");

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchBillPays());
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
