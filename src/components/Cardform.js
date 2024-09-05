import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const cardTypes = ["Visa", "Mastercard", "American Express", "Discover"];

const CardForm = ({ onSubmit }) => {
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);

    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <Formik
      initialValues={{
        cardNumber: "",
        cardHolderName: "",
        expirationDate: "",
        cardType: "",
      }}
      validationSchema={Yup.object({
        cardNumber: Yup.string()
          .required("Required")
          .matches(
            /^\d{4} \d{4} \d{4} \d{4}$/,
            "Card number must be in the format XXXX XXXX XXXX XXXX"
          ),
        cardHolderName: Yup.string().required("Required"),
        expirationDate: Yup.date().required("Required"),
        cardType: Yup.string().required("Required"),
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <div className="form-field">
            <label htmlFor="cardNumber">Card Number</label>
            <Field
              name="cardNumber"
              type="text"
              value={formatCardNumber(values.cardNumber)}
              onChange={(e) => setFieldValue("cardNumber", e.target.value)}
              maxLength="19"
            />
            <ErrorMessage
              name="cardNumber"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="cardHolderName">Card Holder Name</label>
            <Field name="cardHolderName" type="text" />
            <ErrorMessage
              name="cardHolderName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="expirationDate">Expiration Date</label>
            <Field name="expirationDate" type="date" />
            <ErrorMessage
              name="expirationDate"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="cardType">Card Type</label>
            <Field as="select" name="cardType">
              <option value="" label="Select card type" />
              {cardTypes.map((type) => (
                <option key={type} value={type} label={type} />
              ))}
            </Field>
            <ErrorMessage
              name="cardType"
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

export default CardForm;
