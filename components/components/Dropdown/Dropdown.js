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
import { Popover } from "../Popover";
var Component = function (_a) {
    var style = _a.style, children = _a.children, hover = _a.hover, themeCSSProps = _a.themeCSS, className = _a.className, listClassname = _a.listClassname, itemClassname = _a.itemClassname, dropdownItems = _a.dropdownItems, _b = _a.isOpen, isOpenProps = _b === void 0 ? false : _b, onChangeOpen = _a.onChangeOpen, props = __rest(_a, ["style", "children", "hover", "themeCSS", "className", "listClassname", "itemClassname", "dropdownItems", "isOpen", "onChangeOpen"]);
    var themeCSS = themeCSSProps !== null && themeCSSProps !== void 0 ? themeCSSProps : useThemeConfig(__assign(__assign({}, props), { component: "popover" }));
    var dropdownList = (React.createElement(DropdownList, { className: listClassname || "dropdownList" }, dropdownItems === null || dropdownItems === void 0 ? void 0 : dropdownItems.map(function (dropdownItem, index) { return (React.createElement(DropdownItem, { key: "dropdownItem/".concat(index), className: itemClassname || "dropdownItem" }, dropdownItem)); })));
    return (React.createElement(Popover, __assign({ hover: hover, style: style, className: className, themeCSS: themeCSS, isOpen: isOpenProps, onChangeOpen: onChangeOpen, render: dropdownList }, props), children));
};
export var Dropdown = memo(Component);
var DropdownList = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])));
var DropdownItem = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Dropdown.js.map