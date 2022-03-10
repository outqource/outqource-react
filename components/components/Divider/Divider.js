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
import styled from "@emotion/styled";
import { useThemeConfig } from "../../hooks";
var Component = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var themeCSS = useThemeConfig(__assign(__assign({}, props), { component: "divider" }));
    return React.createElement(DividerJSX, __assign({ className: className, themeCSS: themeCSS }, props));
};
export var Divider = memo(Component);
var DividerJSX = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 1px;\n  background-color: #eaeaea;\n  ", ";\n"], ["\n  width: 100%;\n  height: 1px;\n  background-color: #eaeaea;\n  ", ";\n"])), function (props) { return props.themeCSS; });
var templateObject_1;
//# sourceMappingURL=Divider.js.map