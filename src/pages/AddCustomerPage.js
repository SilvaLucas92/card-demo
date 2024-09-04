import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomerForm from "../components/Customerform";
import useCustomerStore from "../store/useCustomerStore";
import "../App.css";

const AddCustomerPage = () => {
  const { addCustomer } = useCustomerStore();
  const [formStatus, setFormStatus] = useState("idle");
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/customers");
  };

  const handleViewCustomersClick = () => {
    navigate("/view-customers");
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setFormStatus("loading");
    setTimeout(() => {
      addCustomer(values);
      setFormStatus("success");
      setSubmitting(false);
    }, 2000);
  };

  useEffect(() => {
    if (formStatus === "success") {
      const timer = setTimeout(() => {
        navigate("/view-customers");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [formStatus, navigate]);

  return (
    <div className="container">
      <button onClick={handleBackClick} className="back-button">
        Back
      </button>
      <button onClick={handleViewCustomersClick} className="back-button">
        View Customers
      </button>
      <h1>Add Customer</h1>

      <CustomerForm onSubmit={handleSubmit} />
      {formStatus === "loading" && <p>Sending...</p>}
      {formStatus === "success" && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default AddCustomerPage;
