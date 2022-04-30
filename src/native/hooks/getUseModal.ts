import { useCallback, useContext, useMemo, useEffect } from "react";
import {
  ModalContext,
  createModal as createModalAction,
  createUnshiftModal as createUnshiftModalAction,
  deleteModal as deleteModalAction,
  clearModal as clearModalAction,
  ModalType,
} from "../lib";

export type UseModalOptions = {
  closeTimeoutMS?: number;
  duplicate?: boolean;
};

const getUseModal = (modalComponents: any) => {
  return (name: string, config?: UseModalOptions) => {
    const { state, dispatch } = useContext(ModalContext);
    const closeTimeoutMS = useMemo(
      (): number => config?.closeTimeoutMS ?? 0,
      [config]
    );
    const duplicate = useMemo(
      (): boolean => config?.duplicate ?? false,
      [config]
    );

    // 열려있는지 체크
    const isOpen: boolean = useMemo(() => {
      let isOpen: boolean = false;
      state.forEach((modal: ModalType) => {
        if (modal.name === name.toUpperCase()) isOpen = true;
      });
      return isOpen;
    }, [state, name]);

    // 열려있는 모달 체크
    const findModal = useMemo((): any | null => {
      if (!isOpen) return null;

      let findModal: any = null;
      state.forEach((modal: ModalType) => {
        if (modal.name.toUpperCase() === name.toUpperCase()) {
          findModal = modal;
        }
      });

      return findModal;
    }, [state, isOpen, name]);

    const deleteModal = useCallback((): void => {
      dispatch(deleteModalAction({ name: name.toUpperCase(), closeTimeoutMS }));
    }, [name, dispatch, closeTimeoutMS]);

    const clearModal = useCallback((): void => {
      dispatch(clearModalAction());
    }, [dispatch]);

    const createModal = useCallback(
      (newProps?: any, unshift?: boolean): void => {
        const props = {
          onRequestClose: deleteModal,
          isOpen: true,
          closeTimeoutMS,
          duplicate,
          modalComponents,
          ...(newProps ?? {}),
        };

        const newModal = {
          name: name.toUpperCase(),
          // component: modal,
          props,
        };

        if (!unshift) {
          dispatch(createModalAction(newModal));
        } else {
          dispatch(createUnshiftModalAction(newModal));
        }
      },
      [dispatch, name, closeTimeoutMS, duplicate, deleteModal]
    );

    useEffect(() => {
      if (!isOpen || closeTimeoutMS === 0) {
        return;
      }

      if (findModal && !findModal.props.isOpen) {
        setTimeout(() => {
          deleteModal();
        }, closeTimeoutMS + 100);
      }
    }, [isOpen, findModal, closeTimeoutMS, deleteModal]);

    return {
      isOpen,
      modals: state,
      createModal,
      deleteModal,
      clearModal,
    };
  };
};

export default getUseModal;
