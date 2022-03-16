/// <reference types="react" />
import { ThemeProviderProps as EmotionThemeProviderProps } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
export declare type CustomTheme = {
    [component: string]: {
        [theme: string]: CSSInterpolation;
    };
};
export interface ThemeProviderProps extends EmotionThemeProviderProps {
    theme: CustomTheme;
    global?: CSSInterpolation;
}
declare module "@emotion/react" {
    interface Theme extends CustomTheme {
    }
}
export declare const createGlobal: (props: CSSInterpolation) => string;
export declare const ThemeProvider: ({ global, theme, children, }: ThemeProviderProps) => JSX.Element;
