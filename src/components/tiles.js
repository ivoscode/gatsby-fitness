import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Tiles = () => {
  const data = useStaticQuery(graphql`
    query {
      one2one: file(relativePath: { eq: "one2one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nutrition: file(relativePath: { eq: "nutrition.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shopping: file(relativePath: { eq: "shopping.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trainfriends: file(relativePath: { eq: "trainfriends.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const tilesData = [
    {
      title: "One-2-one",
      image: <Img fluid={data.one2one.childImageSharp.fluid} />,
      text:
        "Do you have a programme, but need some exercises technique correction or check why do you have pain during exercising?",
    },
    {
      title: "Nutrition Plan",
      image: <Img fluid={data.nutrition.childImageSharp.fluid} />,
      text:
        "Are you regularly train in the gym, but do not see a result? Then you need to change the nutrition system. The nutrition program will be tailored to you, considering your current goals and food preferences, after one to one consultation",
    },
    {
      title: "Healthy Shopping",
      image: <Img fluid={data.shopping.childImageSharp.fluid} />,
      text:
        "Are you regularly train in the gym, but do not see a result? Then you need to change the nutrition system. The nutrition program will be tailored to you, considering your current goals and food preferences, after one to one consultation",
    },
    {
      title: "Train with your friends",
      image: <Img fluid={data.trainfriends.childImageSharp.fluid} />,
      text:
        "Are you regularly train in the gym, but do not see a result? Then you need to change the nutrition system. The nutrition program will be tailored to you, considering your current goals and food preferences, after one to one consultation",
    },
  ]

  return (
    <div className="tiles">
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

export default Tiles
