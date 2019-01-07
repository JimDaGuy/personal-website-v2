import React from 'react'

import skillsStyles from './skills.module.css'

const Skills = () => (
  <section
    className={skillsStyles.section}
    id="skills-section"
  >
    <h1
      className={`${skillsStyles.text} ${skillsStyles.heading}`}
    >
      Skills
    </h1>
    <div className={skillsStyles.overlay}></div>
    <div className={skillsStyles.skillBar}>
      <h2 className={skillsStyles.skillBarText}>Langauges</h2>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Javascript (ES6)</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Typescript</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>C#</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>C/C++</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>HTML</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>CSS/Sass</span>
      </div>
    </div>
    <div className={skillsStyles.skillBar}>
      <h2 className={skillsStyles.skillBarText}>Frameworks</h2>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>React</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Node</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Express</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Gatsby</span>
      </div>
    </div>
    <div className={skillsStyles.skillBar}>
      <h2 className={skillsStyles.skillBarText}>Tools</h2>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Bash</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Git/Github</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Gulp</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Canvas</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>MongoDB</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>MySQL</span>
      </div>
    </div>
    <div className={skillsStyles.skillBar}>
      <h2 className={skillsStyles.skillBarText}>IDEs and Engines</h2>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Visual Studio</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>VS Code</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Atom</span>
      </div>
      <div className={skillsStyles.skillBox}>
        <span className={skillsStyles.skillText}>Unity</span>
      </div>
    </div>
  </section>
)

export default Skills
