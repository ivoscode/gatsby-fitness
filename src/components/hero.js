import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
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
      </div>
    </div>
  );
};

export default Hero;
