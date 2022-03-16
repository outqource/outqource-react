import { css, Global as EmotionGlobal, ThemeProvider as EmotionThemeProvider, } from "@emotion/react";
import React, { useMemo } from "react";
import normalize from "../_constant/normalize";
export var createGlobal = function (props) { var _a; return (_a = css(props || normalize)) === null || _a === void 0 ? void 0 : _a.styles; };
export var ThemeProvider = function (_a) {
    var global = _a.global, theme = _a.theme, children = _a.children;
    var globalStyles = useMemo(function () { return createGlobal(global); }, [global]);
    return (React.createElement(EmotionThemeProvider, { theme: theme },
        React.createElement(EmotionGlobal, { styles: globalStyles }),
        children));
};
//# sourceMappingURL=ThemeProvider.js.map