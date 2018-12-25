import PropTypes from 'prop-types'
import React from 'react'

import aboutStyles from './about.module.css'
import profileImage from '../images/squareProfile.jpg'

const About = ({ name, firstname }) => (
  <section
    className={aboutStyles.section}
  >
    <h1
      className={`${aboutStyles.text} ${aboutStyles.heading}`}
    >
      Hi! I'm {firstname}.
    </h1>
    <h2
      className={`${aboutStyles.text} ${aboutStyles.subheading}`}
    >
      I like making rich web applications
    </h2>
    <div
    className={aboutStyles.imageTextContainer}
    >
      <img
        className={aboutStyles.image}
        src={profileImage}
        alt={name}
      />
      <p
        className={`${aboutStyles.text} ${aboutStyles.maintext}`}
      >
        I'm a third year Game Design and Development student at the Rochester Institute of
        Technology. I started learning Game Development because I've always wanted to combine
        creative expression with technology. Through my studies I found a love for web development
        and decided to pursue it. I love writing software and always find myself trying to learn
        new things.
        <br></br>
        <br></br>
        I'm currently seeking a Software Engineering Co-Op for the Fall of 2019. 
      </p>
    </div>
  </section>
)

About.propTypes = {
  name: PropTypes.string,
  firstname: PropTypes.string
}

About.defaultProps = {
  name: `Jane Doe`,
  firstname: `Jane`
}

export default About
