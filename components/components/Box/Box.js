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
    var themeCSS = useThemeConfig(__assign(__assign({}, props), { component: "box" }));
    return (React.createElement(BoxJSX, __assign({ className: className, themeCSS: themeCSS }, props), children));
};
export var Box = memo(Component);
var BoxJSX = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", "\n  ", ";\n"], ["\n  ", ";\n  ", "\n  ", ";\n"])), function (props) { return props.themeCSS; }, function (props) {
    return props.flex &&
        "\n    display: flex;\n    ".concat(props.flexDirection && "flex-direction: ".concat(props.flexDirection), ";\n    ").concat(props.alignItems && "align-items: ".concat(props.alignItems), ";\n    ").concat(props.justifyContent && "justify-content: ".concat(props.justifyContent), ";\n  ");
}, function (props) {
    return props.grid &&
        "\n    display: grid;\n    ".concat(props.gridTemplateColumns
            ? "grid-template-columns: ".concat(props.gridTemplateColumns, ";")
            : "", "\n    ").concat(props.gridTemplateRows
            ? "grid-template-rows: ".concat(props.gridTemplateRows, ";")
            : "", "\n    ").concat(props.gridGap ? "gap: ".concat(props.gridGap, ";") : "", "\n    ").concat(props.gridRowGap ? "row-gap: ".concat(props.gridRowGap, ";") : "", "\n    ").concat(props.gridColumnGap ? "column-gap: ".concat(props.gridColumnGap, ";") : "", "\n  ");
});
var templateObject_1;
//# sourceMappingURL=Box.js.map