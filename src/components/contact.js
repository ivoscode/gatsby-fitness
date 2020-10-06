import React from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div className="contact-wrap">
      <div className="contact-fields">
        <h1>Want to work with me?</h1>
        <form
          name="contact"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden is required*/}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="name-wrap">
            <label htmlFor="name">full name</label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="email-wrap">
            <label htmlFor="email">email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              rows="4"
              cols="80"
              name="message"
              placeholder="Type a message..."
              onChange={handleChange}
            />
          </div>
          <div className="button-wrap">
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </div>
  )
}
