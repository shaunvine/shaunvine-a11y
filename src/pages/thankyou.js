import React from "react"
import SEOmeta from "../components/SEOmeta"
import Layout from "../components/Layout"
import OutdoorImages from "../components/OutdoorImages"

const ThankYouPage = () => {
  return (
    <Layout>
      <SEOmeta
        title="Thank You for contacting me" // This is the title that will appear in the browser tab
        description="Thank you for contacting me. Your form has been successfully sent. I generally answer within 24 hours, unless I am off surfing or snowboarding."
        image="/images/shaun-vine-portfolio.jpg"
      />
      <main className="page">
        <section className="thankyou-page">
          <div>
            <h2 className="section-title thankyou-page">
              Thank you for contacting me.
            </h2>
            <p>Your form has been successfully sent.</p>
            <p>
              I generally answer within 24 hours, unless I am off surfing or
              snowbaording.
            </p>
          </div>
        </section>
        <section>
          <OutdoorImages />
        </section>
      </main>
    </Layout>
  )
}

export default ThankYouPage
