export var getEnv = function () {
    var l = window.location;
    if (l.hostname.includes('netlify'))
        return 'prod';
    return 'dev';
};
export var getGaKey = function () {
    var _a, _b;
    var env = getEnv();
    if (env === 'prod')
        return (_a = process.env.REACT_APP_GA_KEY_PROD) !== null && _a !== void 0 ? _a : '';
    return (_b = process.env.REACT_APP_GA_KEY_DEV) !== null && _b !== void 0 ? _b : '';
};
//# sourceMappingURL=url.js.map