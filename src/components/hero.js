import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import contact from '../images/contact.svg';
import Img from 'gatsby-image';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className='hero'>
      <div className='hero-img-div'>
        <Img fluid={data.hero.childImageSharp.fluid} className='hero-img' />
      </div>
      <div className='hero-text-div'>
        <h1>BE EFFECTIVE IN YOUR BODY</h1>
        <div className='contact-icons'>
          <Link to='https://www.instagram.com/marinamuraskins/?fbclid=IwAR2HizbYvDi5kbVSZzxaTtPcrirRyTyALh8uCiWMXQyJE2EEsXja1OLyi4o'>
            <img src={instagram} alt='instagram'></img>
          </Link>
          <Link to='https://www.facebook.com/MarinaMuraskins/?ref=page_internal'>
            <img src={facebook} alt='facebook'></img>
          </Link>
          <Link to='/#contact'>
            <img src={contact} alt='contact'></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
