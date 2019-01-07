import PropTypes from 'prop-types'
import React from 'react'

import introStyles from './intro.module.css'

const Intro = ({ name, jobTitle }) => (
  <section
    className={introStyles.section}
    id="intro-section"
  >
    <div
      className={introStyles.nameJobContainer}
    >
      <h1
        className={introStyles.name}
      >{name}
      </h1>
      <hr
        className={introStyles.lineBreak}
      ></hr>
      <h2
        className={introStyles.jobTitle}
      >{jobTitle}
      </h2>
    </div>
    <div
      className={introStyles.scrollContainer}
    >
      <a
        href="#about-section"
        className={introStyles.scrollLink}
      >
        <span
          className={introStyles.scrollSpan}
        >
        </span>
      </a>
    </div>
  </section>
)

Intro.propTypes = {
  name: PropTypes.string,
  jobTitle: PropTypes.string
}

Intro.defaultProps = {
  name: `Jane Doe`,
  jobTitle: 'Web Developer'
}

export default Intro
