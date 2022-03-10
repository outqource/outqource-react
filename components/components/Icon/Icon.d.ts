import React from "react";
import { ComponentProps } from "../../hooks";
export interface IconProps extends ComponentProps, React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode | React.ReactText;
}
export declare const Icon: React.MemoExoticComponent<({ className, children, ...props }: IconProps) => JSX.Element | null>;
