import React from "react"

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    // -------------------------------
    // Google Fonts (global)
    // -------------------------------
    <link
      key="preconnect-google-fonts"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="google-fonts-css"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;400;600;700&family=Atkinson+Hyperlegible:wght@400;700&family=Noto+Sans:wght@100;200;600;700&display=swap"
    />,

    // -------------------------------
    // Set default consent mode BEFORE GTM loads
    // -------------------------------
    <script
      key="gtag-consent-default"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            personalization_storage: 'denied'
          });
          gtag('set', 'ads_data_redaction', true);
        `,
      }}
    />,

    // -------------------------------
    // Load GTM (Consent Mode handles blocking)
    // -------------------------------
    <script
      key="gtm-loader"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5JMVV55D');
        `,
      }}
    />,
  ])

  setPreBodyComponents([
    <noscript
      key="gtm-noscript"
      aria-hidden="true" // hides from assistive tech
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JMVV55D"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
      }}
    />,
  ])
}
