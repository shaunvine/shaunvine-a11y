import React from "react"

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    // Set default consent mode BEFORE GTM loads
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
    // Load GTM unconditionally — Consent Mode will block actual tracking
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
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JMVV55D"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
      }}
    />,
  ])
}
