// src/pages/contact.js
import React, { useState, useRef } from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import OutdoorImages from "../components/OutdoorImages"
import SEOmeta from "../components/SEOmeta"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Tracks validation error messages for each field.
  // An empty string means no error; a non-empty string is the error message.
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Prevents double-submission while the fetch is in flight.
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Refs let us programmatically move focus to the first invalid field
  // so keyboard and screen reader users land exactly where the problem is.
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  // ------------------------------------------------------------------
  // validate()
  // Checks all fields and returns an errors object.
  // If a field is valid its value is an empty string.
  // If invalid it holds the human-readable error message.
  // ------------------------------------------------------------------
  const validate = data => {
    const newErrors = { name: "", email: "", message: "" }

    if (!data.name.trim()) {
      newErrors.name = "Please enter your name."
    }

    if (!data.email.trim()) {
      newErrors.email = "Please enter your email address."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!data.message.trim()) {
      newErrors.message = "Please enter a message."
    }

    return newErrors
  }

  // ------------------------------------------------------------------
  // handleSubmit()
  // 1. Prevents the browser default (page reload).
  // 2. Runs validation — if there are errors, shows them and
  //    moves focus to the first invalid field. Stops here.
  // 3. If valid, posts to Formspree and redirects on success.
  // ------------------------------------------------------------------
  const handleSubmit = async e => {
    e.preventDefault()

    const validationErrors = validate(formData)
    const hasErrors = Object.values(validationErrors).some(msg => msg !== "")

    if (hasErrors) {
      setErrors(validationErrors)

      // Move focus to the first field that failed so the user
      // doesn't have to hunt for what went wrong.
      if (validationErrors.name) nameRef.current?.focus()
      else if (validationErrors.email) emailRef.current?.focus()
      else if (validationErrors.message) messageRef.current?.focus()

      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mleqabja", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        navigate("/thankyou")
      } else {
        console.error("Form submission failed:", response)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ------------------------------------------------------------------
  // handleChange()
  // Updates formData as the user types and clears the error for that
  // field immediately — gives instant positive feedback that the
  // problem is being resolved.
  // ------------------------------------------------------------------
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h1>Want to get in touch?</h1>
            <p>
              Please complete the form and I will respond to your message within
              one business day.
            </p>
            <p>Thanks, Shaun</p>
          </article>

          <article>
            {/*
              noValidate turns off the browser's built-in validation popups.
              We handle all validation ourselves so the experience is
              consistent and accessible across every browser.
            */}
            <form
              className="form a11y-form contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* ---- Name ---- */}
              <div className="form-row">
                <label htmlFor="name">
                  your name<sup aria-hidden="true">*</sup>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  // aria-invalid tells screen readers this field has an error.
                  aria-invalid={errors.name ? "true" : "false"}
                  // aria-describedby points to the error message element below,
                  // so the screen reader reads the error when the field is focused.
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  // role="alert" announces the message immediately when it appears.
                  <p id="name-error" className="form-alert" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* ---- Email ---- */}
              <div className="form-row">
                <label htmlFor="email">
                  your email<sup aria-hidden="true">*</sup>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="form-alert" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* ---- Message ---- */}
              <div className="form-row">
                <label htmlFor="message">
                  your message<sup aria-hidden="true">*</sup>
                </label>
                <textarea
                  ref={messageRef}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="form-alert" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn block"
                aria-label="Send message"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send"}
              </button>
            </form>
          </article>
        </section>

        <section>
          <OutdoorImages />
        </section>
      </main>
    </Layout>
  )
}

export default ContactForm

export const Head = ({ location }) => (
  <SEOmeta
    title="Contact Form"
    description="Contact Shaun Vine for Manual QA Testing, accessibility audits, or CMS support."
    image="/images/shaun-vine-portfolio.jpg"
    pathname={location?.pathname}
    includeJsonLd={false}
  />
)
