import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Intro from './intro'
import About from './about'
import Skills from './skills'
import Experience from './experience'
import Portfolio from './portfolio'
import Contact from './contact'
import Footer from './footer'
import './layout.css'
import SEO from './seo';

// Only import smooth scroll if window is defined.
// Prevents failure during webpack build
if (typeof window !== 'undefined') {
  const SmoothScroll = require('smooth-scroll');

  SmoothScroll('a[href*="#"]', {
    speed: 1500,
    speedAsDuration: true,
    updateURL: false,
  });
}

const Layout = () => (
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
        <SEO title={data.site.siteMetadata.title} />
        <Intro name={data.site.siteMetadata.name} jobTitle={data.site.siteMetadata.jobTitle} />
        <About name={data.site.siteMetadata.name} firstname={data.site.siteMetadata.firstname} />
        <Skills name={data.site.siteMetadata.name} firstname={data.site.siteMetadata.firstname} />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    )}
  />
)

export default Layout
