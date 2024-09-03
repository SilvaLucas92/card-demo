import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BillPayForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ accountId: '', amount: '', description: '' }}
      validationSchema={Yup.object({
        accountId: Yup.string().required('Required'),
        amount: Yup.number().required('Required').positive('Amount must be positive'),
        description: Yup.string().required('Required'),
      })}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="accountId">Account ID</label>
            <Field name="accountId" type="text" />
            <ErrorMessage name="accountId" component="div" />
          </div>

          <div>
            <label htmlFor="amount">Amount</label>
            <Field name="amount" type="number" />
            <ErrorMessage name="amount" component="div" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" />
            <ErrorMessage name="description" component="div" />
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