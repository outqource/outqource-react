import React, { Dispatch } from 'react';
export declare type ModalType = {
    name: string;
    component(): React.ReactElement;
    props?: any;
};
declare enum ActionType {
    create = "modal/CREATE_MODAL",
    createUnshift = "modal/CREATE_UNSHIFT_MODAL",
    delete = "modal/DELETE_MODAL",
    clear = "modal/CLEAR_MODAL"
}
export interface createModalAction {
    type: ActionType.create;
    payload: Omit<ModalType, 'component'>;
}
export interface createUnshiftModalAction {
    type: ActionType.createUnshift;
    payload: Omit<ModalType, 'component'>;
}
export interface deleteModalAction {
    type: ActionType.delete;
    payload: {
        name: string;
        closeTimeoutMS: number;
    };
}
export interface clearModalAction {
    type: ActionType.clear;
}
export declare type ModalActions = createModalAction | createUnshiftModalAction | deleteModalAction | clearModalAction;
export declare const createModal: (props: Omit<ModalType, 'component'>) => createModalAction;
export declare const createUnshiftModal: (props: Omit<ModalType, 'component'>) => createUnshiftModalAction;
export declare const deleteModal: (props: {
    name: string;
    closeTimeoutMS: number;
}) => deleteModalAction;
export declare const clearModal: () => clearModalAction;
export interface ModalProviderProps {
    children: React.ReactNode;
}
export declare const ModalContext: React.Context<{
    state: ModalType[];
    dispatch: Dispatch<ModalActions>;
}>;
export declare const reducer: (state: ModalType[], action: any) => ModalType[];
export declare const ModalProvider: ({ children }: ModalProviderProps) => React.ReactElement;
export {};
