export const GOOGLE_ANALYTICS_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;

export const pageview = (url) => {
  window.gtag('config', GOOGLE_ANALYTICS_MEASUREMENT_ID, {
    page_path: url
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
