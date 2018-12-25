import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Intro from './intro'
import About from './about'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            name
            jobTitle
            firstname
          }
        }
      }
    `}
    render={data => (
      <>
        <Intro name={data.site.siteMetadata.name} jobTitle={data.site.siteMetadata.jobTitle} />
        <About name={data.site.siteMetadata.name} firstname={data.site.siteMetadata.firstname} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
