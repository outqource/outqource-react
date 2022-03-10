import React from "react";
import { ComponentProps } from "../../hooks";
export interface TextareaProps extends ComponentProps, React.HTMLAttributes<HTMLTextAreaElement> {
}
export declare const Textarea: React.MemoExoticComponent<({ className, ...props }: TextareaProps) => JSX.Element>;
