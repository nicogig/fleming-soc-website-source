import React from "react"
import { Link, graphql } from "gatsby"
import CenteredLayout from "../components/CenteredLayout/CenteredLayout"
import SEO from "../components/SEO/SEO"

import Button from '@material/react-button';


// styles declaration
import "../styles/app.scss"

class DipTraceWorkshop extends React.Component {
    render() {
        const { data } = this.props
        const { markdownRemark } = data
        const { html } = markdownRemark
        return (
            <CenteredLayout location={ this.props.location }>
                <SEO title="DipTrace Workshop"></SEO>
                <Link
              to="/workshops/"
              rel="workshops">
                <Button>
                ← Go Back
                </Button>
            </Link>
                <div dangerouslySetInnerHTML={{__html: html}}></div>
            </CenteredLayout>
        )
    }
}

export default DipTraceWorkshop

export const pageQuery = graphql`
query {
    markdownRemark(fileAbsolutePath: { regex: "/diptrace.md/" }) {
        html
    }
}
`