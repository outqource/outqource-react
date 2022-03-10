import React from "react";
import { ComponentProps } from "../../hooks";
export interface DividerProps extends ComponentProps, React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactElement | string;
}
export declare const Divider: React.MemoExoticComponent<({ className, children, ...props }: DividerProps) => React.ReactElement>;
