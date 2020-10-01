import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Instagram from "../components/instagram"
import LeafletMap from "../components/leafletMap"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <Img fluid={data.hero.childImageSharp.fluid} className="hero-image" />
      </section>
      <section className="container">
        <div className="about-grid">
          <h2>Hello, I am Marina</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section className="container">
        <Instagram />
      </section>

      {typeof window !== "undefined" && (
        <LeafletMap
          position={[53.1376164, -1.1958369]} // Your Coordinates
          zoom={16} // Zoom Level
          markerText={"PureGym"} // Icon text
        />
      )}
      <Footer />
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
