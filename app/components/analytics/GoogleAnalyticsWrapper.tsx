'use client';

import { GoogleAnalytics } from 'nextjs-google-analytics';

function GoogleAnalyticsWrapper() {
  return <GoogleAnalytics trackPageViews />;
}

export default GoogleAnalyticsWrapper;
