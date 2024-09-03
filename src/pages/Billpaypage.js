import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillPays } from "../redux/slices/billPaySlice";
import BillPayForm from "../components/Billpayform";

const BillPayPage = () => {
  const dispatch = useDispatch();
  const billPays = useSelector((state) => state.billPay.billPays);
  const status = useSelector((state) => state.billPay.status);
  const error = useSelector((state) => state.billPay.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBillPays());
    }
  }, [status, dispatch]);

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log("Form values:", values);
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Bill Pay</h1>
      <BillPayForm onSubmit={handleSubmit} />
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {billPays.map((billPay) => (
            <li key={billPay.id}>
              {billPay.description} - ${billPay.amount}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>{error}</p>}
    </div>
  );
};

export default BillPayPage;
