import React from 'react';
import ContactForm from './contactForm';
import mail from '../images/mail.svg';
import call from '../images/call.svg';
import facebook from '../images/facebook.svg';

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts-form'>
        <ContactForm />
      </div>
      <div className='contacts-info'>
        <div>
          <img src={mail} alt='mail' />
          <span> marinamuraskins@gmail.com</span>
        </div>
        <div>
          <img src={call} alt='call' /> <span> +44 745 680 8637</span>
        </div>
        <div>
          <a href='https://www.facebook.com/MarinaMuraskins/?ref=page_internal'>
            <img alt='messenger' src={facebook} />
            <span>Fixtofit</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
