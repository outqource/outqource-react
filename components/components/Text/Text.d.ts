import React from "react";
import { ComponentProps } from "../../hooks";
export interface TextProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
}
export declare const Text: React.MemoExoticComponent<({ className, children, ...props }: TextProps) => JSX.Element>;
