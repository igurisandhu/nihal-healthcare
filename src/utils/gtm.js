/**
 * Google Tag Manager / Google Analytics 4 Injection Utility
 * Injects GTM script tags into document <head> at runtime.
 */

const GTM_ID = 'G-NEDBHTPNWH';

export const injectGTM = () => {
  // Avoid double-injection
  if (document.querySelector(`script[src*="${GTM_ID}"]`)) return;

  // Async gtag.js loader
  const loaderScript = document.createElement('script');
  loaderScript.async = true;
  loaderScript.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
  document.head.appendChild(loaderScript);

  // Inline gtag config script
  const configScript = document.createElement('script');
  configScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GTM_ID}');
  `;
  document.head.appendChild(configScript);
};
