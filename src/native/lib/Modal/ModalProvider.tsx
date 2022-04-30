import React, { createContext, Dispatch, useReducer } from "react";

export type ModalType = {
  name: string;
  component(): React.ReactElement;
  props?: any;
};

enum ActionType {
  create = "modal/CREATE_MODAL",
  createUnshift = "modal/CREATE_UNSHIFT_MODAL",
  delete = "modal/DELETE_MODAL",
  clear = "modal/CLEAR_MODAL",
}

export interface createModalAction {
  type: ActionType.create;
  payload: Omit<ModalType, "component">;
}

export interface createUnshiftModalAction {
  type: ActionType.createUnshift;
  payload: Omit<ModalType, "component">;
}

export interface deleteModalAction {
  type: ActionType.delete;
  payload: { name: string; closeTimeoutMS: number };
}

export interface clearModalAction {
  type: ActionType.clear;
}

export type ModalActions =
  | createModalAction
  | createUnshiftModalAction
  | deleteModalAction
  | clearModalAction;

export const createModal = (
  props: Omit<ModalType, "component">
): createModalAction => ({
  type: ActionType.create,
  payload: props,
});

export const createUnshiftModal = (
  props: Omit<ModalType, "component">
): createUnshiftModalAction => ({
  type: ActionType.createUnshift,
  payload: props,
});

export const deleteModal = (props: {
  name: string;
  closeTimeoutMS: number;
}): deleteModalAction => ({
  type: ActionType.delete,
  payload: props,
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

const createModalState = (
  state: ModalType[],
  action: any,
  isUnshift?: boolean
) => {
  const { name, props } = action.payload;
  const { modalComponents, duplicate } = props;

  let findModal: ModalType | undefined = undefined;
  state.forEach((modal: ModalType) => {
    if (modal.name.toUpperCase() === name.toUpperCase()) {
      findModal = modal;
    }
  });

  // 모달이 있을 경우 중복 금지
  if (findModal && !duplicate) {
    return state;
  }

  let component: any = undefined;
  Object.entries(modalComponents).forEach((modalComponent: [string, any]) => {
    const [key, value] = modalComponent;
    if (key.toUpperCase() === name.toUpperCase()) component = value;
  });

  const modalState = {
    name: name.toUpperCase(),
    component,
    props,
  };

  if (isUnshift) {
    return [modalState, ...state];
  } else {
    return [...state, modalState];
  }
};

const deleteModalState = (state: ModalType[], action: any) => {
  const { name, closeTimeoutMS } = action.payload;
  let modals: any[] = state;

  if (closeTimeoutMS > 0) {
    modals = modals.map((modal: ModalType) => {
      if (modal.name !== name) return modal;
      if (!modal.props.isOpen) return null;
      return { ...modal, props: { ...modal.props, isOpen: false } };
    });
  } else {
    return state.filter(
      (modal: ModalType) => modal.name !== action.payload.name
    );
  }

  return modals.filter(Boolean) as ModalType[];
};

export const reducer = (state: ModalType[], action: any): ModalType[] => {
  const type = action?.type;

  switch (type) {
    case ActionType.create:
      return createModalState(state, action);
    // return [...state, action.payload];
    case ActionType.createUnshift:
      return createModalState(state, action, true);
    // return [action.payload, ...state];
    case ActionType.delete:
      return deleteModalState(state, action);
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
