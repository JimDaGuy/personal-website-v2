import PropTypes from 'prop-types'
import React from 'react'
import { IconContext } from 'react-icons'
import { FaLinkedin, FaFileAlt, FaEnvelope, FaTwitterSquare } from 'react-icons/fa';

import aboutStyles from './about.module.css'
import profileImage from '../images/squareProfile.jpg'
import resume from '../files/resume.pdf'

const About = ({ name, firstname }) => (
  <section
    className={aboutStyles.section}
    id="about-section"
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
        Technology. I started learning game development because I've always wanted to combine
        creative expression with technology. Through my studies I found a love for all kinds
        of software development and decided to pursue it. I love writing software and always
        find myself trying to learn new things.
        <br></br>
        <br></br>
        I'm currently seeking a Software Engineering Co-Op for the Fall of 2019.
      </p>
      <div
        className={aboutStyles.iconContainer}
      >
        <IconContext.Provider value={{ size: '15%', className: aboutStyles.icon }}>
          <a
            href='https://www.linkedin.com/in/jimdaguy/'
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Linkedin"
            title="Linkedin"
          ><FaLinkedin /></a>
          <a
            href={resume}
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Resume"
            title="Resume"
          ><FaFileAlt /></a>
          <a
            href="mailto:james@jimdaguy.com"
            aria-label="Email"
            title="Email"
          ><FaEnvelope /></a>
          <a
            href="https://twitter.com/jimdaguy"
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
          ><FaTwitterSquare /></a>
        </IconContext.Provider>
      </div>
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
