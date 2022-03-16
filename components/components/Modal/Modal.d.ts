import React from 'react';
import ReactModal from 'react-modal';
import { ComponentProps } from '../../hooks';
export interface ModalProps extends ComponentProps, Omit<Omit<ReactModal.Props, 'isOpen'>, 'className'> {
    isOpen?: boolean;
}
export declare const defaultStyle: ReactModal.Styles;
export declare const Modal: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<ModalProps, keyof ModalProps> & React.RefAttributes<ReactModal>>>;
