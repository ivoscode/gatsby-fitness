import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Tiless = ({ data }) => {
  const tilesData = [
    {
      title: "One-2-one",
      image: <Img fluid={data.panda3.childImageSharp.fluid} />,
      text:
        "Do you have a programme, but need some exercises technique correction or check why do you have pain during exercising?",
    },
    {
      title: "Nutrition Plan",

      text:
        "Are you regularly train in the gym, but do not see a result? Then you need to change the nutrition system. The nutrition program will be tailored to you, considering your current goals and food preferences, after one to one consultation",
    },
  ]
  //  <Img fluid={data.panda3.childImageSharp.fluid} />
  console.log(data)
  return (
    <div className="tiles">
      {tilesData.map(tile => {
        return (
          <div key={tile.title} className="tile">
            <h1>{tile.title} </h1>
            <p> {tile.text}</p>
            <div>{tile.image}</div>
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query {
    panda1: file(relativePath: { eq: "panda1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    panda2: file(relativePath: { eq: "panda2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    panda3: file(relativePath: { eq: "panda3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Tiless
