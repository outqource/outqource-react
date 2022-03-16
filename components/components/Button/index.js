var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React, { memo } from "react";
import cx from "classnames";
import styled from "@emotion/styled";
import { useThemeConfig } from "../../hooks";
var Component = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, active = _a.active, props = __rest(_a, ["className", "children", "active"]);
    var themeCSS = useThemeConfig(__assign(__assign({}, props), { component: "button" }));
    return (React.createElement(ButtonJSX, __assign({ ref: ref, className: cx(className, { isActive: active }), themeCSS: themeCSS }, props), children));
});
export var Button = memo(Component);
var ButtonJSX = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n  border: 0;\n  background-color: transparent;\n  ", "\n  ", ";\n"], ["\n  outline: none;\n  border: 0;\n  background-color: transparent;\n  ", "\n  ", ";\n"])), function (props) {
    return props.icon &&
        "display: flex; align-items: center; justify-content: center;";
}, function (props) { return props.themeCSS; });
var templateObject_1;
//# sourceMappingURL=index.js.map