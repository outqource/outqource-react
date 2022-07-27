export var getCRAEnvKey = function (key) { return "REACT_APP_".concat(key); };
export var getCRAEnvValues = function (keys) {
    if (typeof window === 'undefined')
        return;
    var processEnv = process.env;
    if (!processEnv)
        return;
    var env = {};
    keys.forEach(function (key) {
        var craKey = getCRAEnvKey(key);
        if (processEnv[craKey])
            env[key] = processEnv[craKey];
    });
    return env;
};
//# sourceMappingURL=env.js.map