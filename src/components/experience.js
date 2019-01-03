import React from 'react'
import { IconContext } from 'react-icons'
import { FaSchool, FaFlag, FaKeyboard } from 'react-icons/fa';

import experienceStyles from './experience.module.css'

const Experience = () => (
  <section
    className={experienceStyles.section}
  >
    <h1
      className={experienceStyles.heading}
    >
      Experience
    </h1>
    <div
      className={experienceStyles.experienceBox}
    >
      <div className={experienceStyles.experienceSymbolContainer}>
        <div className={experienceStyles.experienceSymbol}>
          <IconContext.Provider value={{ size: '70%', className: experienceStyles.symbol }}>
            <FaSchool />
          </IconContext.Provider>
        </div>
      </div>
      <div
        className={experienceStyles.experienceTextBox}
      >
        <h2
          className={experienceStyles.title}
        >
          Student 
        </h2>
        <h3
          className={experienceStyles.group}
        >
          Rochester Institute of Tech.
        </h3>
        <h3
          className={experienceStyles.duration}
        >
          FALL 2016 - CURRENT
        </h3>
        <p
          className={experienceStyles.description}
        >
          I'm currently pursuing a four-year bachelors degree in Game Design and
          Development under the Golisano College of Computing and Information Sciences
            at the Rochester Institute of Technology in <b> Rochester, New York</b>.
          I'm also working towards an immersion in Communications.
        </p>
      </div>
    </div>
    <div
      className={experienceStyles.experienceBox}
    >
      <div className={experienceStyles.experienceSymbolContainer}>
        <div className={experienceStyles.experienceSymbol}>
          <IconContext.Provider value={{ size: '70%', className: experienceStyles.symbol }}>
            <FaFlag />
          </IconContext.Provider>
        </div>
      </div>
      <div
        className={experienceStyles.experienceTextBox}
      >
        <h2
          className={experienceStyles.title}
        >
          Social Director
            </h2>
        <h3
          className={experienceStyles.group}
        >Computer Science House
          
            </h3>
        <h3
          className={experienceStyles.duration}
        >
          FALL 2017 - SPRING 2018
            </h3>
        <p
          className={experienceStyles.description}
        >
          The social director is responsible for organizing and coordinating
          social events for members and working with other organizations to
          plan individual events. Responsibilities include managing a yearly
          budget and maintaining a full, yet organized calendar of events.
        </p>
      </div>
    </div>
    <div
      className={experienceStyles.experienceBox}
    >
      <div className={experienceStyles.experienceSymbolContainer}>
        <div className={experienceStyles.experienceSymbol}>
          <IconContext.Provider value={{ size: '70%', className: experienceStyles.symbol }}>
            <FaKeyboard />
          </IconContext.Provider>
        </div>
      </div>
      <div
        className={experienceStyles.experienceTextBox}
      >
        <h2
          className={experienceStyles.title}
        >
          Software Developer
        </h2>
        <h3
          className={experienceStyles.group}
        >
          Liberty Mutual Insurance
        </h3>
        <h3
          className={experienceStyles.duration}
        >
          SUMMER 2018
        </h3>
        <p
          className={experienceStyles.description}
        >
          Worked on an agile team to develop an application for the
          IT Helpdesk to help expedite working with remote computers. 
          Interviewed multiple agents of the IT Helpdesk and followed
          continuous improvement practices by releasing WIP versions to
          a pilot group. Worked on a usage statistics tool for the application
          to be later implemented into a developer dashboard.
        </p>
      </div>
    </div>
  </section>
)

export default Experience
