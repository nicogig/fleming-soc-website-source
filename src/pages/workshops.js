import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import CenteredLayout from "../components/CenteredLayout/CenteredLayout"
import SEO from "../components/SEO/SEO"

import Card, {
  CardPrimaryContent,
  CardActions,
  CardActionButtons,
} from "@material/react-card"

import Button from '@material/react-button';

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <CenteredLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="Workshops"
          keywords={[`workshops`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Explore the Workshops
        </h1>
        <Card
        className="mdc-card--clickable anoun-blog-card">
          <Link to={"/project-x/"}>
          <CardPrimaryContent>
            <div className="anoun-blog-card-content__container">
              <h3>Project X</h3>
            </div>
            </CardPrimaryContent>
            <CardActions fullBleed>
              <CardActionButtons>
                <Button>Visit</Button>
              </CardActionButtons>
            </CardActions>
            </Link>
        </Card>
      </CenteredLayout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
