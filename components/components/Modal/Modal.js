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
import ReactModal from "react-modal";
import styled from "@emotion/styled";
import { useThemeConfig } from "../../hooks";
export var defaultStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
        outline: "none",
        border: 0,
    },
};
var Component = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.style, style = _b === void 0 ? { overlay: {}, content: {} } : _b, onRequestClose = _a.onRequestClose, props = __rest(_a, ["children", "className", "style", "onRequestClose"]);
    var themeCSS = useThemeConfig(__assign(__assign({}, props), { component: "modal" }));
    return (React.createElement(ModalJSX, __assign({ isOpen: true, onRequestClose: onRequestClose, style: {
            overlay: __assign(__assign({}, defaultStyle.overlay), style.overlay),
            content: __assign(__assign({}, defaultStyle.content), style.content),
        }, className: className, themeCSS: themeCSS }, props), children));
};
export var Modal = memo(Component);
var ModalJSX = styled(ReactModal)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #fff;\n  border: 0;\n  outline: none;\n  ", ";\n"], ["\n  background-color: #fff;\n  border: 0;\n  outline: none;\n  ", ";\n"])), function (props) { return props.themeCSS; });
var templateObject_1;
//# sourceMappingURL=Modal.js.map