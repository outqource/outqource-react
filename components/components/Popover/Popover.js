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
import React, { memo, useCallback, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useThemeConfig, useClickOutside } from "../../hooks";
var Component = function (_a) {
    var style = _a.style, className = _a.className, children = _a.children, render = _a.render, _b = _a.hover, hover = _b === void 0 ? false : _b, _c = _a.isOpen, isOpenProps = _c === void 0 ? false : _c, onChangeOpen = _a.onChangeOpen, themeCSSProps = _a.themeCSS, props = __rest(_a, ["style", "className", "children", "render", "hover", "isOpen", "onChangeOpen", "themeCSS"]);
    var themeCSS = themeCSSProps !== null && themeCSSProps !== void 0 ? themeCSSProps : useThemeConfig(__assign(__assign({}, props), { component: "popover" }));
    var containerRef = useRef(null);
    var renderRef = useRef(null);
    var _d = useState(isOpenProps), isOpen = _d[0], setIsOpen = _d[1];
    var onChangeIsOpen = useCallback(function (status) {
        return function () {
            setIsOpen(status);
            if (onChangeOpen)
                onChangeOpen(status);
        };
    }, [onChangeOpen]);
    var onMouseEnter = useCallback(function () {
        if (hover)
            onChangeIsOpen(true)();
    }, [hover, onChangeIsOpen]);
    var onMouseLeave = useCallback(function () {
        if (hover)
            onChangeIsOpen(false)();
    }, [hover, onChangeIsOpen]);
    useClickOutside([containerRef, renderRef], onChangeIsOpen(false));
    return (React.createElement(PopoverJSX, { ref: containerRef, className: className, style: style, themeCSS: themeCSS },
        React.createElement(PopoverCore, __assign({ onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onClick: onChangeIsOpen(!isOpen) }, props), children),
        isOpen && React.createElement(PopoverChildren, { ref: renderRef }, render)));
};
export var Popover = memo(Component);
var PopoverJSX = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  ", ";\n"], ["\n  position: relative;\n  cursor: pointer;\n  ", ";\n"])), function (props) { return props.themeCSS; });
var PopoverCore = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var PopoverChildren = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n"], ["\n  width: 100%;\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Popover.js.map