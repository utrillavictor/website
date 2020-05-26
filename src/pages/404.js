import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/404.css"

const NotFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed
  return (
    <div className="not-found">
      <h5>hoooo WHO? What you're looking for couldn't be found.</h5>
      <Img fixed={featureImage} alt="Sad Corgi" />
    </div>
  )
}

export default NotFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "corgi.jpg" } }) {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
