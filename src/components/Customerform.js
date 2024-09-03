import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const CustomerForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        customerId: "",
        firstName: "",
        middleName: "",
        lastName: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        stateCode: "",
        countryCode: "",
        zipCode: "",
        phoneNumber1: "",
        phoneNumber2: "",
        ssn: "",
        govtIssuedId: "",
        dob: "",
        eftAccountId: "",
        primaryCardIndicator: "",
        ficoCreditScore: "",
      }}
      validationSchema={Yup.object({
        customerId: Yup.string().required("Required"),
        firstName: Yup.string().required("Required"),
        middleName: Yup.string(),
        lastName: Yup.string().required("Required"),
        addressLine1: Yup.string().required("Required"),
        addressLine2: Yup.string(),
        addressLine3: Yup.string(),
        stateCode: Yup.string()
          .required("Required")
          .max(2, "Must be 2 characters"),
        countryCode: Yup.string()
          .required("Required")
          .max(3, "Must be 3 characters"),
        zipCode: Yup.string()
          .required("Required")
          .max(10, "Must be 10 characters"),
        phoneNumber1: Yup.string()
          .required("Required")
          .max(15, "Must be 15 characters"),
        phoneNumber2: Yup.string().max(15, "Must be 15 characters"),
        ssn: Yup.string()
          .required("Required")
          .matches(/^[0-9]{9}$/, "Must be 9 digits"),
        govtIssuedId: Yup.string()
          .required("Required")
          .max(20, "Must be 20 characters"),
        dob: Yup.date().required("Required"),
        eftAccountId: Yup.string()
          .required("Required")
          .max(10, "Must be 10 characters"),
        primaryCardIndicator: Yup.string()
          .required("Required")
          .max(1, "Must be 1 character"),
        ficoCreditScore: Yup.number()
          .required("Required")
          .min(300, "Must be at least 300")
          .max(850, "Must be at most 850"),
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-field">
            <label htmlFor="customerId">Customer ID</label>
            <Field name="customerId" type="text" />
            <ErrorMessage
              className="error-message"
              name="customerId"
              component="div"
            />
          </div>

          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="middleName">Middle Name</label>
            <Field name="middleName" type="text" />
            <ErrorMessage
              name="middleName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="addressLine1">Address Line 1</label>
            <Field name="addressLine1" type="text" />
            <ErrorMessage
              name="addressLine1"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="addressLine2">Address Line 2</label>
            <Field name="addressLine2" type="text" />
            <ErrorMessage
              name="addressLine2"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="addressLine3">Address Line 3</label>
            <Field name="addressLine3" type="text" />
            <ErrorMessage
              name="addressLine3"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="stateCode">State Code</label>
            <Field name="stateCode" type="text" />
            <ErrorMessage
              name="stateCode"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="countryCode">Country Code</label>
            <Field name="countryCode" type="text" />
            <ErrorMessage
              name="countryCode"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="zipCode">Zip Code</label>
            <Field name="zipCode" type="text" />
            <ErrorMessage
              name="zipCode"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber1">Phone Number 1</label>
            <Field name="phoneNumber1" type="text" />
            <ErrorMessage
              name="phoneNumber1"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber2">Phone Number 2</label>
            <Field name="phoneNumber2" type="text" />
            <ErrorMessage
              name="phoneNumber2"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="ssn">SSN</label>
            <Field name="ssn" type="text" />
            <ErrorMessage
              name="ssn"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="govtIssuedId">Government Issued ID</label>
            <Field name="govtIssuedId" type="text" />
            <ErrorMessage
              name="govtIssuedId"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="dob">Date of Birth</label>
            <Field name="dob" type="date" />
            <ErrorMessage
              name="dob"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="eftAccountId">EFT Account ID</label>
            <Field name="eftAccountId" type="text" />
            <ErrorMessage
              name="eftAccountId"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="primaryCardIndicator">Primary Card Indicator</label>
            <Field name="primaryCardIndicator" type="text" />
            <ErrorMessage
              name="primaryCardIndicator"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="ficoCreditScore">FICO Credit Score</label>
            <Field name="ficoCreditScore" type="number" />
            <ErrorMessage
              name="ficoCreditScore"
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

export default CustomerForm;
