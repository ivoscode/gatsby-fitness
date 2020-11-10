import React from 'react';
import { Formik, Field } from 'formik';

import validationSchema from './validationSchema';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '', success: false }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setFieldValue }) => {
        fetch('/?no-cache=1', {
          //eslint-disable-line
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact2',
            ...values,
          }),
        })
          .then(() => {
            setFieldValue('success', true);
            setTimeout(() => resetForm(), 6000);
            setSubmitting(false);
          })
          .catch((error) => {
            console.log(error);
            alert('Error: Please Try Again!'); //eslint-disable-line
            setSubmitting(false);
          });
      }}
      render={({
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleReset,
        values,
      }) => (
        <form
          name='contact2'
          onSubmit={handleSubmit}
          onReset={handleReset}
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <div className='field'>
            <label className='label' htmlFor='name'>
              Name
            </label>
            <div className='control'>
              <Field
                className='input'
                type='text'
                placeholder='Full Name'
                name='name'
                id='name'
              />
            </div>
            {touched.name && errors.name && (
              <small className='has-text-danger'>{errors.name}</small>
            )}
          </div>

          <div className='field'>
            <label className='label' htmlFor='email'>
              Email
            </label>
            <div className='control'>
              <Field
                className='input'
                type='email'
                placeholder='Email'
                name='email'
                id='email'
              />
            </div>
            {touched.email && errors.email && (
              <small className='has-text-danger'>{errors.email}</small>
            )}
          </div>

          <div className='field'>
            <label className='label ' htmlFor='message'>
              Message
            </label>
            <div className='control'>
              <Field
                className='textarea'
                component='textarea'
                placeholder='Message'
                name='message'
                id='message'
                rows='6'
              />
            </div>
            {touched.message && errors.message && (
              <small className='has-text-danger'>{errors.message}</small>
            )}
          </div>

          <div className='field is-grouped is-pulled-right'>
            <div className='control'>
              <button className='button' type='reset'>
                Clear
              </button>
            </div>
            {values.success && (
              <div>
                <div>
                  <h4>
                    Your message has been successfully sent, I will get back to
                    you ASAP!
                  </h4>
                </div>
              </div>
            )}
            <div className='control'>
              <button
                className='button is-primary'
                type='submit'
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
};

export { ContactForm };
