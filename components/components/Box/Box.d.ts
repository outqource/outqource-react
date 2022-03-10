import React from "react";
import { ComponentProps } from "../../hooks";
export interface BoxProps extends ComponentProps, React.HTMLAttributes<HTMLDivElement> {
    flex?: boolean;
    flexDirection?: "row" | "column";
    alignItems?: string;
    justifyContent?: string;
    grid?: boolean;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridGap?: string;
    gridRowGap?: string;
    gridColumnGap?: string;
}
export declare const Box: React.MemoExoticComponent<({ className, children, ...props }: BoxProps) => JSX.Element>;
