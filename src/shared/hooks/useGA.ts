import GA4React from 'ga-4-react';
import { decamelizeKeys } from 'humps';
import { debounce } from 'lodash-es';
import { useCallback, useRef } from 'react';
import { EventNameTypes, DataType } from '../constants/ga';
import { getGaKey } from '../utils/url';

export interface GAProps {
  action: string;
  data?: { [key: string]: unknown };
}

export default function useGA() {
  const ga4react = useRef<GA4React>();

  const initializeGA = useCallback((): void => {
    // https://analytics.google.com/analytics/web/
    // https://developers.google.com/analytics
    ga4react.current = new GA4React(getGaKey(), {}, [], 5000);
    ga4react.current
      .initialize()
      .then(() => null)
      .catch(() => null);
  }, []);

  // gtag('event', '<event_name>', {<event_params>});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const gaEvent: <T extends EventNameTypes>(eventName: T, data: DataType[T]) => void = useCallback(
    debounce((eventName, data = {}) => {
      window.gtag?.('event', eventName, decamelizeKeys(data));
    }, 500),
    [],
  );

  const gaPV = useCallback((pagePath: string): void => {
    if (window.gtag)
      window.gtag('event', 'page_view', {
        page_path: pagePath,
      });
  }, []);

  return {
    initializeGA,
    gaEvent,
    gaPV,
  };
}