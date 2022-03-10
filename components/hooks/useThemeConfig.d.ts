import React from "react";
export interface ComponentProps {
    className?: string;
    children?: React.ReactNode | undefined;
    themeCSS?: string;
    [key: string]: any;
}
interface ThemeConfigProps {
    [key: string]: string | boolean | keyof JSX.IntrinsicElements | React.ReactNode;
    component: string;
}
export declare const useThemeConfig: ({ component, ...props }: ThemeConfigProps) => string;
export {};
