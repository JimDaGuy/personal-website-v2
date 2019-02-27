import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa';

import portfolioStyles from './portfolio.module.css'
import paintGuageImage from '../images/paintgauge.png'
import audioVisImage from '../images/audiovis.png'
import bubblePhoenixImage from '../images/bubblephoenix.png'

const Portfolio = () => (
  <section
    className={portfolioStyles.section}
    id="portfolio-section"
  >
    <h1
      className={portfolioStyles.heading}
    >
      Featured Projects
    </h1>
    <div className={portfolioStyles.overlay}></div>
    <div
      className={portfolioStyles.projectsContainer}
    >
      <div
        className={portfolioStyles.projectBox}
      >
        <img
          className={portfolioStyles.projectImage}
          src={paintGuageImage}
          alt="Paint Gauge"
        >
        </img>
        <h2 className={portfolioStyles.projectName}>
          Paint Gauge
        <IconContext.Provider value={{ size: '1em', className: portfolioStyles.github }}>
            <a
              href="https://github.com/JimDaGuy/crispy-adventure"
              target='_blank'
              rel="noopener noreferrer"
              aria-label="Paint Guage Github Repository"
              title="Paint Gauge Github Repository"
            >
              <FaGithub />
            </a>
          </IconContext.Provider>
        </h2>
        <p
          className={portfolioStyles.projectDescription}
        >
          Paint Gauge is a WIP web application that allows users to
          rate paintings from the Harvard Art Museum.
        </p>
        <div
          className={portfolioStyles.projectSkillsContainer}
        >
          <div className={portfolioStyles.projectSkill}>Javascript</div>
          <div className={portfolioStyles.projectSkill}>React</div>
          <div className={portfolioStyles.projectSkill}>Node</div>
          <div className={portfolioStyles.projectSkill}>Express</div>
          <div className={portfolioStyles.projectSkill}>MongoDB</div>
          <div className={portfolioStyles.projectSkill}>Harvard Art Museum API</div>
        </div>
      </div>
      <div
        className={portfolioStyles.projectBox}
      >
        <img
          className={portfolioStyles.projectImage}
          src={audioVisImage}
          alt="Audio Vis"
        >
        </img>
        <h2 className={portfolioStyles.projectName}>
          Audio Vis
        <IconContext.Provider value={{ size: '1em', className: portfolioStyles.github }}>
            <a
              href="https://github.com/JimDaGuy/audio-vis"
              target='_blank'
              rel="noopener noreferrer"
              aria-label="Audio Vis Github Repository"
              title="Audio Vis Github Repository"
            >
              <FaGithub />
            </a>
          </IconContext.Provider>
        </h2>
        <p
          className={portfolioStyles.projectDescription}
        >
          Audio Vis is an Audio Visualizer that allows users to sign
          in with their Spotify account and visualize song previews from Spotify.
        </p>
        <div
          className={portfolioStyles.projectSkillsContainer}
        >
          <div className={portfolioStyles.projectSkill}>Javascript</div>
          <div className={portfolioStyles.projectSkill}>HTML Canvas</div>
          <div className={portfolioStyles.projectSkill}>Node</div>
          <div className={portfolioStyles.projectSkill}>Spotify Web API</div>
        </div>
      </div>
      <div
        className={portfolioStyles.projectBox}
      >
        <img
          className={portfolioStyles.projectImage}
          src={bubblePhoenixImage}
          alt="Bubble Phoenix"
        >
        </img>
        <h2 className={portfolioStyles.projectName}>
          Bubble Phoenix
        <IconContext.Provider value={{ size: '1em', className: portfolioStyles.github }}>
            <a
              href="https://github.com/JimDaGuy/bubblephoenix"
              target='_blank'
              rel="noopener noreferrer"
              aria-label="Bubble Phoenix Github Repository"
              title="Bubble Phoenix Github Repository"
            >
              <FaGithub />
            </a>
          </IconContext.Provider>
        </h2>
        <p
          className={portfolioStyles.projectDescription}
        >
          Bubble Phoenix is a rich web application that allows users to search
          a location for charities in their area. It also includes a 'Search
          Nearby' feature utilizing geolocation.
        </p>
        <div
          className={portfolioStyles.projectSkillsContainer}
        >
          <div className={portfolioStyles.projectSkill}>Javascript</div>
          <div className={portfolioStyles.projectSkill}>HTML Canvas</div>
          <div className={portfolioStyles.projectSkill}>Node</div>
        </div>
      </div>
      <div
        className={portfolioStyles.githubButtonContainer}
      >
        <a
          href="https://github.com/JimDaGuy/"
          target='_blank'
          rel="noopener noreferrer"
          aria-label="JimDaGuy | Github"
          className={portfolioStyles.githubButton}
        >
          Check out my Github!
      </a>
      </div>
    </div>
  </section>
)

export default Portfolio
