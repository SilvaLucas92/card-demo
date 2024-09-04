import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../redux/slices/customerSlice";
import { useNavigate } from "react-router-dom";
import CustomerForm from "../components/Customerform";
import "../App.css";

const AddCustomerPage = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  const status = useSelector((state) => state.customer.status);
  const error = useSelector((state) => state.customer.error);
  const [formStatus, setFormStatus] = useState("idle");

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchCustomers());
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
      <h1>Customers</h1>

      <CustomerForm onSubmit={handleSubmit} />
      {formStatus === "loading" && <p>Sending...</p>}
      {formStatus === "success" && <p>Form submitted successfully!</p>}
      {/* {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>{error}</p>} */}
    </div>
  );
};

export default AddCustomerPage;
