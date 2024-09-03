import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const BillPayForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ accountId: "", amount: "", description: "" }}
      validationSchema={Yup.object({
        accountId: Yup.string().required("Required"),
        amount: Yup.number()
          .required("Required")
          .positive("Amount must be positive"),
        description: Yup.string().required("Required"),
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-field">
            <label htmlFor="accountId">Account ID</label>
            <Field name="accountId" type="text" />
            <ErrorMessage
              name="accountId"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="amount">Amount</label>
            <Field name="amount" type="number" />
            <ErrorMessage
              name="amount"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" />
            <ErrorMessage
              name="description"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BillPayForm;
