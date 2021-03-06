import React from 'react'

import contactStyles from './contact.module.css'

const Contact = () => (
  <section
    className={contactStyles.section}
    id="contact-section"
  >
    <div className={contactStyles.overlay}></div>
    <h1
      className={`${contactStyles.text} ${contactStyles.heading}`}
    >
      Let's Talk
    </h1>
    <p
      className={contactStyles.message}
    >
      Thanks for stopping by! If you would like to talk to me about
      anything shoot me a message.
    </p>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={contactStyles.form}
    >
      <p className={contactStyles.botField}>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <label
        htmlFor="name"
        className={contactStyles.inputLabel}
      >
        Name:
        </label>
      <input
        type="text"
        name="Name"
        id="name"
        className={contactStyles.inputField}
      ></input>
      <label
        htmlFor="email"
        className={contactStyles.inputLabel}
      >
        Email:
        </label>
      <input
        type="text"
        name="Email"
        id="email"
        className={contactStyles.inputField}
      ></input>
      <label
        htmlFor="subject"
        className={contactStyles.inputLabel}
      >
        Subject:
        </label>
      <input
        type="text"
        name="Subject"
        id="subject"
        className={contactStyles.inputField}
      ></input>
      <label
        htmlFor="message"
        className={contactStyles.inputLabel}
      >
        Message:
        </label>
      <textarea
        rows='3' 
        data-min-rows='3'
        type="text"
        name="Message"
        id="message"
        className={contactStyles.messageBox}
      ></textarea>
      <button
        className={contactStyles.submit}
      >
      Send Message
      </button>
    </form>
  </section>
)

export default Contact
