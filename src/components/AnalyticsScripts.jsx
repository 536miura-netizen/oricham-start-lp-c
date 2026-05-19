'use client';

import Script from 'next/script';
import { appendCurrentUtm, trackEvent } from '../lib/tracking.js';

export default function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}

      {clarityId ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}

      <Script id="cta-tracking" strategy="afterInteractive">
        {`
          document.addEventListener('click', function(event) {
            const target = event.target.closest('[data-track-event]');
            if (!target) return;
            const name = target.getAttribute('data-track-event');
            const label = target.getAttribute('data-track-label');
            if (window.gtag && name) {
              window.gtag('event', name, { event_label: label || target.textContent.trim() });
            }
          });
        `}
      </Script>
    </>
  );
}
