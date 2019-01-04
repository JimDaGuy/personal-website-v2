import React from 'react'

import contactStyles from './contact.module.css'

const Contact = () => (
  <section
    className={contactStyles.section}
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
    >   <label
          for="name"
          className={contactStyles.inputLabel}
        >
        Name:
        </label>
        <input 
          type="text"
          placeholder="Your Name"
          name="Name"
          id="name"
          className={contactStyles.inputField}
        ></input>
        <label 
          for="email"
          className={contactStyles.inputLabel}
        >
          Email:
        </label>
        <input
          type="text"
          placeholder="Your Email Address"
          name="Email"
          id="email"
          className={contactStyles.inputField}
          ></input>
        <label 
          for="subject"
          className={contactStyles.inputLabel}
        >
          Subject:
        </label>
        <input
          type="text"
          placeholder="Subject"
          name="Subject"
          id="subject"
          className={contactStyles.inputField}
        ></input>
        <label 
          for="message"
          className={contactStyles.inputLabel}
        >
          Message:
        </label>
        <input
          type="text"
          placeholder="Message"
          name="Message"
          id="message"
          className={contactStyles.inputField}
        ></input>
        <input
          type="submit"
          name="submit"
          value="Send Message"
          id="submit"
          className={contactStyles.submit}
        ></input>
    </form>
  </section>
        )
        
        export default Contact
