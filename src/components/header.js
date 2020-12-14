import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      marinapng: file(relativePath: { eq: "marinapng.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className='header'>
      <Link to='/'>
        <Img fluid={data.marinapng.childImageSharp.fluid} className='logo' />
      </Link>
      <div className='two-buttons'>
        <a
          href='https://www.facebook.com/MarinaMuraskins/?ref=page_internal'
          target='blank'
          className='app-button'
        >
          BOOK AN APPOINTMENT
        </a>

        {/*Hamburger button*/}
        <button onClick={() => toggleExpansion(!isExpanded)}>
          <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      {/*Nav dropdown menu*/}
      <nav className={`${isExpanded ? `show` : `hide`} navi`}>
        {[
          {
            route: `/#train`,
            title: `About Me`,
          },
          {
            route: `/#train`,
            title: `One-2-One Coaching`,
          },
          {
            route: `/#train`,
            title: `Online Coaching`,
          },
          {
            route: `/#train`,
            title: `Nutrition`,
          },

          {
            route: `/#contact`,
            title: `Contact`,
          },
        ].map((link) => (
          <Link className='link' key={link.title} to={link.route}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
