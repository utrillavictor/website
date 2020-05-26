import { useStaticQuery, graphql } from "gatsby"

export const useSiteImage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: {eq: "me.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      images: allFile(filter: { relativeDirectory: {eq: "logos"}}, sort: {fields: name, order: ASC}) {
        nodes {
          id
          childImageSharp {
            fixed(width: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return data
}
