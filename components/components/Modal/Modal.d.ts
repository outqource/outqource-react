import React from "react";
import ReactModal from "react-modal";
import { ComponentProps } from "../../hooks";
export interface ModalProps extends ComponentProps {
    style?: ReactModal.Styles;
    onRequestClose(): void;
    children: string | React.ReactNode | React.ReactNodeArray;
}
export declare const defaultStyle: ReactModal.Styles;
export declare const Modal: React.MemoExoticComponent<({ children, className, style, onRequestClose, ...props }: ModalProps) => React.ReactElement>;
