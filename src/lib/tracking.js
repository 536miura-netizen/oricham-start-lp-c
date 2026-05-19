export const contactLinks = {
  line: process.env.NEXT_PUBLIC_LINE_URL || 'https://lin.ee/P4whNSS',
  consultation: process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || 'https://cal.com/ayaka-miura-m7jftn/洋サホ-lpオンラインこ相談c',
  download: process.env.NEXT_PUBLIC_DOWNLOAD_URL || '#cta',
};

export const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

export function appendCurrentUtm(url) {
  if (typeof window === 'undefined' || !url || url.startsWith('#')) return url;

  const target = new URL(url, window.location.href);
  const currentParams = new URLSearchParams(window.location.search);

  utmKeys.forEach((key) => {
    const value = currentParams.get(key);
    if (value && !target.searchParams.has(key)) {
      target.searchParams.set(key, value);
    }
  });

  return target.toString();
}
