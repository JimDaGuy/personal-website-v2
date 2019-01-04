import React from 'react'

import footerStyles from './footer.module.css'

const Footer = () => (
  <section
    className={footerStyles.section}
  >
    <span className={footerStyles.copyright}>
      ©&nbsp;&nbsp;James DiGrazia 2019
    </span>
  </section>
)

export default Footer
