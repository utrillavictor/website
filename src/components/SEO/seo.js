import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.siteUrl
        const metaImage = data.image.publicURL
        const metaLanguage = data.site.siteMetadata.siteLanguage
        const metaKeywords = keywords || [
          'gatsby website',
          'Victor Utrilla website',
        ]
        return (
          <Helmet
            title={metaTitle}
            lang={metaLanguage}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `og:title`,
                content: metaTitle,
              },
              {
                name: `og:description`,
                content: metaDescription,
              },
              {
                name: `og:author`,
                content: metaAuthor,
              },
              {
                name: `og:type`,
                content: `website`,
              },
              {
                name: `og:image`,
                content: metaImage,
              },
              {
                name: `og:url`,
                content: metaUrl,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : [],
            )}
          />
        )
      }}
    />
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
      }
    }
    image: file(relativePath: { eq: "me.jpg" }) {
      publicURL
    }
  }
`
