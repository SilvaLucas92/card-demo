import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const TransactionForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        accountId: "",
        cardNumber: "",
        typeCode: "",
        categoryCode: "",
        source: "",
        description: "",
        amount: "",
        origDate: "",
        procDate: "",
        merchantId: "",
        merchantName: "",
        merchantCity: "",
        merchantZip: "",
      }}
      validationSchema={Yup.object({
        accountId: Yup.string()
          .required("Required")
          .matches(/^[0-9]+$/, "Must be numeric"),
        cardNumber: Yup.string()
          .required("Required")
          .matches(/^[0-9]+$/, "Must be numeric"),
        typeCode: Yup.string()
          .required("Required")
          .matches(/^[0-9]+$/, "Must be numeric"),
        categoryCode: Yup.string()
          .required("Required")
          .matches(/^[0-9]+$/, "Must be numeric"),
        source: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        amount: Yup.string()
          .required("Required")
          .matches(/^-?\d+(\.\d{1,2})?$/, "Must be a valid amount"),
        origDate: Yup.date().required("Required"),
        procDate: Yup.date().required("Required"),
        merchantId: Yup.string().required("Required"),
        merchantName: Yup.string().required("Required"),
        merchantCity: Yup.string().required("Required"),
        merchantZip: Yup.string().required("Required"),
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
            <label htmlFor="cardNumber">Card Number</label>
            <Field name="cardNumber" type="text" />
            <ErrorMessage
              name="cardNumber"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="typeCode">Type Code</label>
            <Field name="typeCode" type="text" />
            <ErrorMessage
              name="typeCode"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="categoryCode">Category Code</label>
            <Field name="categoryCode" type="text" />
            <ErrorMessage
              name="categoryCode"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="source">Source</label>
            <Field name="source" type="text" />
            <ErrorMessage
              name="source"
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

          <div className="form-field">
            <label htmlFor="amount">Amount</label>
            <Field name="amount" type="text" />
            <ErrorMessage
              name="amount"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="origDate">Orig Date</label>
            <Field name="origDate" type="date" />
            <ErrorMessage
              name="origDate"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="procDate">Proc Date</label>
            <Field name="procDate" type="date" />
            <ErrorMessage
              name="procDate"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="merchantId">Merchant ID</label>
            <Field name="merchantId" type="text" />
            <ErrorMessage
              name="merchantId"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="merchantName">Merchant Name</label>
            <Field name="merchantName" type="text" />
            <ErrorMessage
              name="merchantName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="merchantCity">Merchant City</label>
            <Field name="merchantCity" type="text" />
            <ErrorMessage
              name="merchantCity"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="merchantZip">Merchant Zip</label>
            <Field name="merchantZip" type="text" />
            <ErrorMessage
              name="merchantZip"
              component="div"
              className="error-message"
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TransactionForm;
