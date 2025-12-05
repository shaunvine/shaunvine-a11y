import React from "react"

const ClientFeedback = () => {
  return (
    <div className="feedback-hero">
      <div className="feedback-heading">
        <h2 className="section-title feedback-heading">What clients say</h2>
      </div>
      <div className="testimonials-container">
        <blockquote>
          <span className="callout">
            Shaun provides the rare combination of an eye for design with
            knowledge in current web development tools.
          </span>
          He has taken one of my client's website and converted it to WordPress,
          matching the original design so well and even improving it for
          extensibility. I was impressed with Shaun's attention to detail and
          the client was very happy with the result. Now she can update her
          website herself, which gives clients a lot of flexibility. I recommend
          Shaun for anyone who needs a website (based on WordPress or not).
          Shaun is very trustworthy and delivers great results!
          <span className="client-name">Melissa</span>
        </blockquote>
        <blockquote>
          As an architect, I had some very clear ideas on how I wanted my site
          to look and feel. Shaun worked extra hard to meet all of my
          expectations,
          <span className="callout">
            even schooling himself to learn new website design and coding
            techniques to meet those demanding expectations.
          </span>
          I couldn't be more pleased with the results! I would recommend him to
          any small business owner just getting started with their online
          presence. He is good at what he does, and as a bonus, he's a charming
          and lovely fellow who is a pleasure to work with!
          <span className="client-name">Kit</span>
        </blockquote>
      </div>
    </div>
  )
}

export default ClientFeedback
