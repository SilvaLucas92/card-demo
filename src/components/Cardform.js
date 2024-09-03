import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CardForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ cardNumber: '', cardHolderName: '', expirationDate: '', cardType: '' }}
      validationSchema={Yup.object({
        cardNumber: Yup.string()
          .required('Required')
          .matches(/^[0-9]{16}$/, 'Card number must be 16 digits'),
        cardHolderName: Yup.string().required('Required'),
        expirationDate: Yup.date().required('Required'),
        cardType: Yup.string().required('Required'),
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="cardNumber">Card Number</label>
            <Field name="cardNumber" type="text" />
            <ErrorMessage name="cardNumber" component="div" />
          </div>

          <div>
            <label htmlFor="cardHolderName">Card Holder Name</label>
            <Field name="cardHolderName" type="text" />
            <ErrorMessage name="cardHolderName" component="div" />
          </div>

          <div>
            <label htmlFor="expirationDate">Expiration Date</label>
            <Field name="expirationDate" type="date" />
            <ErrorMessage name="expirationDate" component="div" />
          </div>

          <div>
            <label htmlFor="cardType">Card Type</label>
            <Field name="cardType" type="text" />
            <ErrorMessage name="cardType" component="div" />
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

export default CardForm;