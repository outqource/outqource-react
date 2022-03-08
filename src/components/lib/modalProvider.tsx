import React, { createContext, Dispatch, useReducer } from 'react';

export type ModalType = {
  name: string;
  component(): React.ReactElement;
  props?: any;
};

enum ActionType {
  create = 'modal/CREATE_MODAL',
  createUnshift = 'modal/CREATE_UNSHIFT_MODAL',
  delete = 'modal/DELETE_MODAL',
  clear = 'modal/CLEAR_MODAL',
}

export interface createModalAction {
  type: ActionType.create;
  payload: ModalType;
}

export interface createUnshiftModalAction {
  type: ActionType.createUnshift;
  payload: ModalType;
}

export interface deleteModalAction {
  type: ActionType.delete;
  payload: string;
}

export interface clearModalAction {
  type: ActionType.clear;
}

export type ModalActions =
  | createModalAction
  | createUnshiftModalAction
  | deleteModalAction
  | clearModalAction;

export const createModal = (props: ModalType): createModalAction => ({
  type: ActionType.create,
  payload: props,
});
export const createUnshiftModal = (
  props: ModalType
): createUnshiftModalAction => ({
  type: ActionType.createUnshift,
  payload: props,
});
export const deleteModal = (name: string): deleteModalAction => ({
  type: ActionType.delete,
  payload: name,
});
export const clearModal = (): clearModalAction => ({ type: ActionType.clear });

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext<{
  state: ModalType[];
  dispatch: Dispatch<ModalActions>;
}>({
  state: [],
  dispatch: () => undefined,
});

export const reducer = (state: ModalType[], action: any): ModalType[] => {
  const type = action?.type;

  switch (type) {
    case ActionType.create:
      return [...state, action.payload];
    case ActionType.createUnshift:
      return [action.payload, ...state];
    case ActionType.delete:
      return state.filter((modal: ModalType) => modal.name !== action.payload);
    case ActionType.clear:
      return [];
    default:
      return state;
  }
};

export const ModalProvider = ({
  children,
}: ModalProviderProps): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
