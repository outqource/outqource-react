import GA4React from 'ga-4-react';
import { decamelizeKeys } from 'humps';
import { debounce } from 'lodash-es';
import { useCallback, useRef } from 'react';
import { getGaKey } from '../utils/url';
export default function useGA() {
    var ga4react = useRef();
    var initializeGA = useCallback(function () {
        // https://analytics.google.com/analytics/web/
        // https://developers.google.com/analytics
        ga4react.current = new GA4React(getGaKey(), {}, [], 5000);
        ga4react.current
            .initialize()
            .then(function () { return null; })
            .catch(function () { return null; });
    }, []);
    // gtag('event', '<event_name>', {<event_params>});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var gaEvent = useCallback(debounce(function (eventName, data) {
        var _a;
        if (data === void 0) { data = {}; }
        (_a = window.gtag) === null || _a === void 0 ? void 0 : _a.call(window, 'event', eventName, decamelizeKeys(data));
    }, 500), []);
    var gaPV = useCallback(function (pagePath) {
        if (window.gtag)
            window.gtag('event', 'page_view', {
                page_path: pagePath,
            });
    }, []);
    return {
        initializeGA: initializeGA,
        gaEvent: gaEvent,
        gaPV: gaPV,
    };
}
//# sourceMappingURL=useGA.js.map