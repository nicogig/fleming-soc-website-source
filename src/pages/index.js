import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"

import Button from "@material/react-button"
import Card from "@material/react-card"

// import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg"
import heroImage from "../images/hero.png"

// Styles
import "../styles/app.scss"

class IndexPage extends React.Component {
  render() {
  const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO />
        <section className="anoun-home--section1">
        <img src={heroImage} alt="hero" />
          <h3>Hi, we're the <span className="fleming-title">Fleming Society</span> <span role="img" aria-label="waving hand">👋</span></h3>
          <br></br>
          <h4>We are UCL's <a className="external-link" href={'https://www.ucl.ac.uk/electronic-electrical-engineering/'}>Electronic & Electrical Engineering</a> Departmental Society.</h4>
        </section>
        <section className="anoun-home--section2">
          <h3>We host a large number of events, including:</h3>
          <h3><span role="img" aria-label="bottle with popping cork">🍾</span> Socials</h3>
          <h3><span role="img" aria-label="clinking beer mugs">🍻</span> Pub Crawls</h3>
          <h3><span role="img" aria-label="hammer and spanner">🛠</span> Workshops</h3>
          <h3><span role="img" aria-label="open book">📖</span> Guest Lectures</h3>
          <h3>We are also part of UCL Engineering Society.</h3>
        </section>
        <section className="anoun-home--section3">
          <h2>Next Events</h2>
          <div className="blog-posts__container">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                  <Card
                    className="mdc-card--clickable anoun-blog-card"
                    key={node.fields.slug}
                  >
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
                  </Card>
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const indexQuery = graphql`
         query {
           allMarkdownRemark(
             filter: { fileAbsolutePath: { regex: "/posts/" } }
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
