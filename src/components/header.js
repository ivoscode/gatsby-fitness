import { Link } from "gatsby"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
  `)
  const [isExpanded, toggleExpansion] = useState(false)
  console.log(data.marinapng.childImageSharp.fluid.src)
  return (
    <header className="header">
      <Link to="/">
        <Img fluid={data.marinapng.childImageSharp.fluid} className="logo" />
      </Link>
      <button onClick={() => toggleExpansion(!isExpanded)}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <nav className={`${isExpanded ? `show` : `hide`} navi`}>
        {[
          {
            route: `/about`,
            title: `About`,
          },
          {
            route: `/contact`,
            title: `Contact`,
          },
        ].map(link => (
          <Link className="link" key={link.title} to={link.route}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
