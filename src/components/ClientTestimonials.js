import React from "react"

const testimonials = [
  {
    name: "Melissa",
    highlight:
      "Shaun provides the rare combination of an eye for design with knowledge in current web development tools.",
    quote:
      "He has taken one of my client's website and converted it to WordPress, matching the original design so well and even improving it for extensibility. I was impressed with Shaun's attention to detail and the client was very happy with the result. Now she can update her website herself, which gives clients a lot of flexibility. I recommend Shaun for anyone who needs a website based on WordPress or not. Shaun is very trustworthy and delivers great results!",
  },
  {
    name: "Kit",
    highlight:
      "Even schooling himself to learn new website design and coding techniques to meet those demanding expectations.",
    quote:
      "As an architect, I had some very clear ideas on how I wanted my site to look and feel. Shaun worked extra hard to meet all of my expectations. I couldn't be more pleased with the results! I would recommend him to any small business owner just getting started with their online presence. He is good at what he does, and as a bonus, he's a charming and lovely fellow who is a pleasure to work with!",
  },
]

const ClientTestimonials = () => {
  return (
    <section
      className="client-testimonials"
      id="client-testimonials"
      aria-labelledby="client-testimonials-heading"
    >
      <div className="client-testimonials__container">
        <div className="section-header section-header--center">
          <h2
            id="client-testimonials-heading"
            className="section-title section-title-testimonials"
          >
            Client Feedback
          </h2>
        </div>

        <div className="client-testimonials__grid">
          {testimonials.map(testimonial => (
            <blockquote
              className="client-testimonials__card"
              key={testimonial.name}
            >
              <p className="client-testimonials__highlight">
                {testimonial.highlight}
              </p>

              <p className="client-testimonials__quote">{testimonial.quote}</p>

              <p className="client-testimonials__footer">
                <cite>{testimonial.name}</cite>
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonials
