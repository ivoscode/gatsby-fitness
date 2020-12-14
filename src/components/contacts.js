import React from 'react';
import ContactForm from './contactForm';
import mail from '../images/mail.svg';
import call from '../images/call.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

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
        <div>
          <a href='https://www.instagram.com/marinamuraskins/?fbclid=IwAR2HizbYvDi5kbVSZzxaTtPcrirRyTyALh8uCiWMXQyJE2EEsXja1OLyi4o'>
            <img alt='instagram' src={instagram} />
            <span>Follow me on Instagram</span>{' '}
          </a>
        </div>
        <div>
          <a
            href='https://www.facebook.com/MarinaMuraskins/?ref=page_internal'
            target='blank'
            className='app-button'
          >
            BOOK AN APPOINTMENT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
