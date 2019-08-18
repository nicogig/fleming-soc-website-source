import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./blogPostGrid.module.scss"

import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
} from "@material/react-card"

import Button from '@material/react-button';

function BlogPostGrid() {
  return (
    <StaticQuery
      query={blogPostQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
          <section className="page-main__section">
            <div className="blog-posts__container">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (  
                    <Card
                      className="mdc-card--clickable anoun-blog-card"
                      key={node.fields.slug}
                    >
                      <Link to={node.fields.slug}>
                      <CardPrimaryContent>
                        <Img
                          className="mdc-card__media"
                          fluid={
                            node.frontmatter.featured_image.childImageSharp
                              .fluid
                          }
                        />
                        <div className="anoun-blog-card-content__container">
                          <h3>{title}</h3>
                          <small>{node.frontmatter.date}</small>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                node.frontmatter.description || node.excerpt,
                            }}
                          />
                        </div>
                        </CardPrimaryContent>
                        </Link>
                        <CardActions fullBleed>
                          <CardActionButtons>
                            <Link to={node.fields.slug}><Button>Read More</Button></Link>
                          </CardActionButtons>
                        </CardActions>
                    </Card>
                )
              })}
            </div>
          </section>
        )
      }}
    />
  )
}

const blogPostQuery = graphql`
  query BlogPostQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/workshops/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featured_image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 92) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPostGrid
