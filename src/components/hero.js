import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className='hero'>
        <Img fluid={data.hero.childImageSharp.fluid} className='hero-image' />
      </div>
    </div>
  );
};

export default Hero;
