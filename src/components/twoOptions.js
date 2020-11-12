import React from 'react';
import { Link } from 'gatsby';

import one from '../images/one.svg';
import two from '../images/two.svg';

const TwoOptions = () => {
  return (
    <div id='train' className='two-options'>
      <div className='options-title'>
        <h1>Train Online from Home</h1>
        <h3>Two options available</h3>
      </div>

      <div className='option-one'>
        <img src={one} alt='one' />
        <p>Training online in the private Instagram and Facebook groups.</p>
      </div>
      <div className='option-two'>
        <img src={two} alt='two' />
        <p>Live Zoom session. Three spaces.</p>
      </div>

      <div className='button-wrap'>
        <Link to='/#contact' target='blank' className='options-button'>
          CONTACT FOR AVAILABILITY
        </Link>
      </div>
    </div>
  );
};

export default TwoOptions;
