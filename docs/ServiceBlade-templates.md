# ServiceBlade Templates

## 1-col (single)
```jsx
import React from "react"
import ServiceBlade from "../components/ServiceBlade"
import CTA from "../components/CTA" // if you use your CTA component

export default function ExamplePage() {
  return (
    <ServiceBlade
      id="example-one-col"
      variant="light" // "light" | "strong" | "dark"
      layout="single" // "single" | "two" | "three"

      /* Blade heading block (optional, but your code renders it only if at least one has text) */
      title="One Column Blade Title"
      subtitle="Optional subtitle"
      description="Optional description paragraph."

      /* List section (single/two only) */
      listHeading="Includes:"
      items={[
        {
          label: "List item label",
          description: "Optional description under the label.",
          // subList is currently used inside 3-col list items in your file,
          // but leaving it here as a reference if you later extend single/two lists.
          subList: {
            heading: "Using:",
            items: ["NVDA", "VoiceOver", "AXE", "WAVE"],
          },
        },
        {
          label: "Another item",
          description: "",
        },
      ]}

      /* Blade footer text (blade-level) */
      footerText="Optional blade footer text."

      /* Blade footer CTA (blade-level) */
      bladeFooterCTA={
        <CTA
          href="/contact"
          wrapperClassName="button-group"
          className="request-quote-btn"
          ariaLabel="Request a consultation"
        >
          Request a consultation
        </CTA>
      }
    />
  )
}

- `## 2-col (two)`
import React from "react"
import ServiceBlade from "../components/ServiceBlade"

export default function ExamplePage() {
  return (
    <ServiceBlade
      id="example-two-col"
      variant="light"
      layout="two"

      title="Two Column Blade Title"
      subtitle="Optional subtitle"
      description="Optional description."

      /* Optional list for single/two layouts (renders above columns in your component) */
      listHeading="Includes:"
      items={[
        { label: "Item one", description: "Optional description." },
        { label: "Item two", description: "" },
      ]}

      /* Two column content: pass React nodes */
      columns={[
        <div key="col-1">
          <h3>Column 1 heading</h3>
          <p>Any React content here.</p>
        </div>,
        <div key="col-2">
          <h3>Column 2 heading</h3>
          <p>Any React content here.</p>
        </div>,
      ]}

      footerText="Optional blade footer text."

      bladeFooterCTA={
        <a className="request-quote-btn" href="/contact">
          Contact me
        </a>
      }
    />
  )
}

- `## 3-col (three / pricing cards)`

import React from "react"
import ServiceBlade from "../components/ServiceBlade"

export default function ExamplePage() {
  return (
    <ServiceBlade
      id="example-three-col"
      variant="light"
      layout="three"

      /* Blade heading block (optional) */
      title="Project Packages"
      subtitle="Optional subtitle"
      description="Optional description."

      /* 3-col columns: objects, not nodes */
      columns={[
        {
          badge: "Ideal for Small Sites", // optional ribbon/badge text
          heading: "Basic Accessibility Review",
          subheading: "Short subheading here",

          items: [
            {
              label: "Up to 5 pages",
              description: "Optional description.",
              subList: {
                heading: "Using:",
                items: ["AXE", "WAVE"],
              },
            },
            {
              label: "Keyboard review",
              description: "",
              // omit subList entirely when not used (no blank space)
            },
          ],

          /* Per-column footer text + CTA */
          footerText: "Optional footer text for this column.",
          bladeFooterCTA: (
            <a className="three-col-cta" href="/contact">
              Book Basic Review
            </a>
          ),
        },

        {
          badge: "Most Popular",
          heading: "Standard WCAG 2.2 Audit",
          subheading: "Most popular tier",

          items: [
            {
              label: "Up to 20 pages",
              description: "",
              subList: { heading: "Using:", items: ["NVDA", "VoiceOver"] },
            },
            {
              label: "Full manual audit",
              description: "",
            },
          ],

          footerText: "Great for marketing sites & small product flows.",
          bladeFooterCTA: (
            <a className="three-col-cta" href="/contact">
              Book Standard Audit
            </a>
          ),
        },

        {
          badge: "",
          heading: "Post-Fix Verification (Re-Test)",
          subheading: "After fixes are implemented",

          items: [
            {
              label: "After your team completes fixes, I’ll:",
              description: "",
              subList: {
                heading: "Includes:",
                items: [
                  "Re-test all previous issues",
                  "Validate improvements",
                  "Confirm WCAG compliance",
                ],
              },
            },
          ],

          footerText: "Best when you want confidence before launch.",
          bladeFooterCTA: (
            <a className="three-col-cta" href="/contact">
              Book Re-Test
            </a>
          ),
        },
      ]}

      /* Optional blade-level CTA (renders below the whole blade) */
      bladeFooterCTA={
        <a className="request-quote-btn" href="/contact">
          Ask about custom packages
        </a>
      }
    />
  )
}


**Important Notes**:

- “Don’t pass empty strings for title/subtitle/description (WAVE empty heading).”
- “Use `col.badge`, `col.footerText`, `col.bladeFooterCTA` inside 3-col columns.”


// Standard twoCards (matches 3-column cards)
// Use this for text-only cards without images or paragraphs.
<ServiceBlade
  id="about-my-work"
  variant="light"
  layout="twoCards"
  title="About My Work"
  subtitle=""
  description=""
  columns={[
    {
      heading: "Accessibility & QA",
      subheading: "What I focus on",
      items: [
        { label: "WCAG 2.2 audits" },
        { label: "Manual QA testing" },
        { label: "Keyboard & screen reader testing" },
        { label: "Real user flow validation" },
      ],
      footerText: "Accessibility-first testing approach",
      bladeFooterCTA: (
        <a className="three-col-cta" href="/accessibility">
          Learn more
        </a>
      ),
    },
    {
      heading: "Who I Work With",
      subheading: "Teams & organizations",
      items: [
        { label: "Small businesses" },
        { label: "Agencies" },
        { label: "Startups" },
        { label: "In-house product teams" },
      ],
      footerText: "Flexible engagement options",
      bladeFooterCTA: (
        <a className="three-col-cta" href="/contact">
          Get in touch
        </a>
      ),
    },
  ]}
/>

// twoCardsMedia — Use this when one or both cards include an image or rich content. This is used on the About page (text + image).

<ServiceBlade
          layout="twoCards"
          title="About My Work"
          columns={[
            {
              heading: "Accessibility & QA",
              subheading: "What I focus on",

              // Fills the “blank space” area
              body: (
                <p className="card-paragraph">
                  Shaun is a Web Content Engineer and Manual QA tester with 8
                  years experience. He is an active Professional Member of the
                  International Association of Accessibility Professionals
                  (IAAP)
                </p>
              ),

              items: [
                { label: "WCAG 2.2 audits" },
                { label: "Manual QA testing" },
              ],
            },
            {
              image: (
                <article>
                  <StaticImage
                    src="../assets/images/About.png"
                    alt="Shaun Vine in snowboarding gear climbing a mountain with friends"
                    className="about-img"
                    placeholder="blurred"
                  />
                </article>
              ),
            },
          ]}
        />


// Testimonial Blade 

<ServiceBlade
            id="client-testimonials"
            variant="dark"
            layout="two"
            title="Client Feedback"
            columns={[
              <ClientTestimonial
                key="t1"
                highlight="Shaun provides the rare combination of an eye for design with knowledge in current web development tools."
                quote="He has taken one of my client's website and converted it to WordPress, matching the original design so well and even improving it for extensibility. I was impressed with Shaun's attention to detail and the client was very happy with the result. Now she can update her website herself, which gives clients a lot of flexibility. I recommend Shaun for anyone who needs a website (based on WordPress or not). Shaun is very trustworthy and delivers great results!"
                name="Melissa"
              />,
              <ClientTestimonial
                key="t2"
                highlight="Even schooling himself to learn new website design and coding techniques to meet those demanding expectations."
                quote="As an architect, I had some very clear ideas on how I wanted my site to look and feel. Shaun worked extra hard to meet all of my expectations. I couldn't be more pleased with the results! I would recommend him to any small business owner just getting started with their online presence. He is good at what he does, and as a bonus, he's a charming and lovely fellow who is a pleasure to work with!"
                name="Kit"
              />,
            ]}
          />