import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../redux/slices/customerSlice";
import CustomerForm from "../components/Customerform";
import "../App.css";

const CustomerPage = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  const status = useSelector((state) => state.customer.status);
  const error = useSelector((state) => state.customer.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCustomers());
    }
  }, [status, dispatch]);

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log("Form values:", values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <h1>Customers</h1>
      <CustomerForm onSubmit={handleSubmit} />
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>{error}</p>}
    </div>
  );
};

export default CustomerPage;
