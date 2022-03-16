var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useMemo } from 'react';
import { useTheme, css } from '@emotion/react';
var useThemeConfig = function (_a) {
    var component = _a.component, props = __rest(_a, ["component"]);
    // 테마에 해당하는 태그 없으면 무시
    var theme = useTheme();
    var serializeStyle = useMemo(function () {
        if (!theme[component])
            return '';
        var componentKeys = Object.keys(theme[component]);
        var propsKeys = Object.keys(props);
        var foundedList = [];
        componentKeys.forEach(function (component) {
            if (propsKeys.includes(component))
                foundedList.push(component);
        });
        if (foundedList.length === 0)
            return '';
        var serializeStyle = undefined;
        foundedList.forEach(function (founded) {
            var _a;
            if (!serializeStyle) {
                var style = theme[component][founded];
                serializeStyle = ((_a = css(style)) === null || _a === void 0 ? void 0 : _a.styles) || '';
            }
        });
        return serializeStyle;
    }, [props]);
    return serializeStyle || '';
};
export default useThemeConfig;
//# sourceMappingURL=useThemeConfig.js.map