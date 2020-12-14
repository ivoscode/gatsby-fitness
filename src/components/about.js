import React from 'react';

const About = () => {
  return (
    <div>
      <div id='about' className='about-grid'>
        <h2>Hello, I am Marina</h2>
        <section>
          <p>
            My goal is to give people the opportunity to live an active life
            without being ashamed of their bodies, and not to suffer from pain.
            My goal is to help you to become a better game player, be effective
            in your own body for everyday life, to be able to play with your
            kids.
          </p>
          <p>
            Future of fitness stand by functional fitness and no matter how old
            you are it will help you to create or return your better body.{' '}
          </p>
          <p>
            I keep learning about the human body and movements. Let's join in my
            journey.
          </p>
        </section>
      </div>

      <div className='speciality'>
        <div>
          <ul>
            <h2>Specialist:</h2>
            <li>Posture improvement</li>
            <li>Back pain</li>
            <li>Improving mobility and flexibility of joints and spine</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Main:</h2>
            <li>Functional and strength training</li>
            <li>Yoga</li>
            <li>Myofascial release</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
