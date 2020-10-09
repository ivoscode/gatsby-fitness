import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Tiless = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const tilesData = [
    {
      title: "One-2-one",
      image: <Img fluid={data.panda1.childImageSharp.fluid} />,
      text:
        "Do you have a programme, but need some exercises technique correction or check why do you have pain during exercising?",
    },
    {
      title: "Nutrition Plan",
      image: <Img fluid={data.panda2.childImageSharp.fluid} />,
      text:
        "Are you regularly train in the gym, but do not see a result? Then you need to change the nutrition system. The nutrition program will be tailored to you, considering your current goals and food preferences, after one to one consultation",
    },
  ]

  return (
    <div className="tiles">
      <Img fluid={data.panda3.childImageSharp.fluid} />
      {tilesData.map(tile => {
        return (
          <div key={tile.title} className="tile">
            <div>{tile.image}</div> <h1>{tile.title} </h1>
            <p> {tile.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Tiless
