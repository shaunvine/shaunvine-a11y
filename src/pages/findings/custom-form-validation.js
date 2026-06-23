import React from "react"
import Layout from "../../components/Layout"
import SEOmeta from "../../components/SEOmeta"
import Transcript from "../../components/Transcript"
import { FaExternalLinkAlt } from "react-icons/fa"

const transcriptContent = (
  <>
    <p>
      The clip opens with a title card reading: Accessibility Finding — Custom
      Form Validation — Keyboard Support. Presented by Shaun Vine.
    </p>

    <p>
      <strong>The Problem.</strong> The contact form is shown with all three
      required fields empty — Your Name, Your Email, and Your Message. The user
      clicks the Send button. A native browser alert appears below the Name
      field reading "Please fill out this field." Only one field is flagged at a
      time. The voiceover states: "With native browser validation, submitting an
      empty required field triggers an alert — one field at a time."
    </p>

    <p>
      The same form remains on screen. The voiceover continues: "There's no
      styling, no consistency, and no focus management." The browser alert has
      no styling that matches the interface, does not show all errors at once,
      and does not move keyboard focus to the affected field.
    </p>

    <p>
      <strong>The Fix.</strong> The form now uses custom JavaScript validation.
      All three required fields display inline error messages simultaneously,
      each with a red border. The Name field has focus. Error messages read:
      "Please Enter Your Name.", "Please Enter Your Email Address.", and "Please
      Enter A Message." The voiceover states: "With custom validation, all
      required fields show errors at once — inline, styled to match the
      interface."
    </p>

    <p>
      The user begins typing the letter M in the Name field. The Name field
      error clears immediately while the Email and Message errors remain. The
      voiceover states: "And as the user corrects each field, the error clears
      in real time."
    </p>

    <p>
      <strong>The Code.</strong> The voiceover states: "Here's how it works in
      code."
    </p>

    <p>
      A dark-themed code card is shown, titled "contact.js — form element".
      The form element is displayed with the <code>noValidate</code> attribute
      highlighted. The voiceover states: "Step 1: Disable the browser alert.
      noValidate disables the browser alert."
    </p>

    <p>
      A second code card is shown, titled "contact.js — Name field". Three ARIA
      attributes are highlighted in the code:
    </p>
    <ul>
      <li>
        <code>aria-invalid</code> — marks the field as failed
      </li>
      <li>
        <code>aria-describedby</code> — connects the field to its error message
      </li>
      <li>
        <code>role="alert"</code> — announces the error to screen readers
        immediately
      </li>
    </ul>
    <p>
      The voiceover states: "Step 2: Make errors accessible. aria-invalid marks
      the field as failed. aria-describedby connects the field to its error
      message. And role=alert announces it immediately."
    </p>

    <p>
      The clip closes with a card referencing the WCAG success criteria this fix
      addresses:
    </p>
    <ul>
      <li>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html"
          target="_blank"
          rel="noreferrer"
        >
          WCAG 3.3.1 — Error Identification (Level A){" "}
          <FaExternalLinkAlt aria-label="opens in new tab" style={{ display: "inline", verticalAlign: "middle", fontSize: "0.75em" }} />
        </a>
      </li>
      <li>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"
          target="_blank"
          rel="noreferrer"
        >
          WCAG 3.3.3 — Error Suggestion (Level AA){" "}
          <FaExternalLinkAlt aria-label="opens in new tab" style={{ display: "inline", verticalAlign: "middle", fontSize: "0.75em" }} />
        </a>
      </li>
    </ul>
  </>
)

const CustomFormValidationPage = () => {
  return (
    <Layout>
      <main className="page finding-detail">
        <article className="finding-detail__article">
          <header className="finding-detail__header">
            <p className="finding-detail__category">
              Accessibility Quick Check
            </p>

            <h1 className="finding-detail__title">Custom Form Validation</h1>

            <p className="finding-detail__summary">
              Native browser validation fires one alert at a time and breaks
              focus management. This review shows how custom JavaScript
              validation fixes the experience for keyboard users.
            </p>

            <a href="#transcript" className="finding-detail__transcript-link">
              Read the full transcript ↓
            </a>
          </header>

          <div className="finding-detail__layout">
            <div className="finding-detail__video-wrapper">
              <video
                className="finding-detail__video"
                controls
                preload="metadata"
                poster="/assets/video-covers/form-validation-cover.jpg"
              >
                <source
                  src="/assets/videos/form-validation.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video element.
              </video>
            </div>

            <div className="finding-detail__content">
              <section className="finding-detail__section">
                <h2>What Is It?</h2>
                <p>
                  Native browser form validation shows one alert at a time on
                  submit, with no styling, no focus management, and no way to
                  see all errors at once.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>Why It Matters</h2>
                <p>
                  Keyboard users depend on consistent focus management and
                  inline error messages to understand what went wrong and where
                  to fix it. Native browser alerts fail on both counts.
                </p>
              </section>

              <section className="finding-detail__section">
                <h2>How To Test</h2>
                <ol className="finding-detail__steps">
                  <li>Tab through the form without entering any values.</li>
                  <li>Press Enter or click Submit.</li>
                  <li>Observe whether all required field errors appear at once.</li>
                  <li>Check whether focus moves to the first error field.</li>
                  <li>Confirm error messages are inline and styled consistently.</li>
                </ol>
              </section>

              <section className="finding-detail__section">
                <h2>The Fix</h2>
                <p>
                  Adding <code>noValidate</code> to the form disables the
                  native browser alert. Custom JavaScript validation then shows
                  all required field errors simultaneously, inline, with focus
                  moved to the first error field. Three ARIA attributes complete
                  the fix:
                </p>
                <ul className="finding-detail__skills">
                  <li>
                    <code>aria-invalid</code> — marks the field as failed
                  </li>
                  <li>
                    <code>aria-describedby</code> — connects the field to its
                    error message
                  </li>
                  <li>
                    <code>role="alert"</code> — announces the error to screen
                    readers immediately
                  </li>
                </ul>
                <p>This satisfies WCAG 3.3.1 and 3.3.3.</p>
              </section>

              <section className="finding-detail__section">
                <h2>WCAG Reference</h2>
                <ul className="finding-detail__skills">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WCAG 3.3.1 — Error Identification (Level A){" "}
                      <FaExternalLinkAlt aria-label="opens in new tab" style={{ display: "inline", verticalAlign: "middle", fontSize: "0.75em" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WCAG 3.3.3 — Error Suggestion (Level AA){" "}
                      <FaExternalLinkAlt aria-label="opens in new tab" style={{ display: "inline", verticalAlign: "middle", fontSize: "0.75em" }} />
                    </a>
                  </li>
                </ul>
              </section>

              <section className="finding-detail__section">
                <h2>Related Skills</h2>
                <ul className="finding-detail__skills">
                  <li>Accessibility Testing</li>
                  <li>Custom JavaScript Validation</li>
                  <li>ARIA Attributes</li>
                  <li>Keyboard Navigation</li>
                </ul>
              </section>
            </div>
          </div>

          <Transcript transcript={transcriptContent} />
        </article>
      </main>
    </Layout>
  )
}

export default CustomFormValidationPage

export const Head = ({ location }) => (
  <SEOmeta
    title="Custom Form Validation — Accessibility Finding"
    description="Native browser validation fires one alert at a time and breaks focus management. This review shows how custom JavaScript validation fixes the experience for keyboard users."
    pathname={location?.pathname}
  />
)
