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
            'form-name': 'contact',
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
            setFieldValue('success', false);
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
        <div id='contact' className='contact-wrap'>
          <div className='contact-fields'>
            <h1>Want to work with me?</h1>
            <form
              name='contact'
              onSubmit={handleSubmit}
              onReset={handleReset}
              data-netlify='true'
              data-netlify-honeypot='bot-field'
            >
              <div>
                <label htmlFor='name'>Name</label>
                <div>
                  <Field
                    className='input'
                    type='text'
                    placeholder='Name'
                    name='name'
                    id='name'
                  />
                </div>
                {touched.name && errors.name && (
                  <small className='text-danger'>{errors.name}</small>
                )}
              </div>

              <div>
                <label htmlFor='email'>Email</label>
                <div>
                  <Field
                    className='input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    id='email'
                  />
                </div>
                {touched.email && errors.email && (
                  <small className='text-danger'>{errors.email}</small>
                )}
              </div>

              <div>
                <label htmlFor='message'>Message</label>
                <div>
                  <Field
                    className='textarea'
                    component='textarea'
                    placeholder='Message'
                    name='message'
                    id='message'
                    rows='4'
                  />
                </div>
                {touched.message && errors.message && (
                  <small className='text-danger'>{errors.message}</small>
                )}
              </div>

              <div>
                {values.success && (
                  <div>
                    <div>
                      <h4>
                        Your message has been successfully sent, I will get back
                        to you ASAP!
                      </h4>
                    </div>
                  </div>
                )}
                <div className='button-wrap'>
                  <button type='submit' disabled={isSubmitting}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    />
  );
};

export default ContactForm;
