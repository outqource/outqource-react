import React, { memo, useContext } from 'react';
import { ModalContext, ModalType } from '../../lib';

export interface GlobalModalProps {
  multiple?: boolean;
  last?: boolean;
}

const GlobalComponent = ({
  multiple = true,
  last = false,
}: GlobalModalProps): React.ReactElement | null => {
  const { state } = useContext(ModalContext);
  let modals: React.ReactNode | React.ReactNodeArray | null = null;

  if (state.length > 0 && multiple) {
    modals = state.map((modal: ModalType) => {
      const Component = modal.component;
      return <Component {...modal.props} />;
    });
  } else if (state.length > 0 && !multiple) {
    const modalList = state.map((modal: ModalType) => {
      const Component = modal.component;
      return <Component {...modal.props} />;
    });

    if (last) modals = modalList[state.length - 1];
    else modals = modalList[0];
  }

  return <>{modals}</>;
};

export const GlobalModal = memo(GlobalComponent);
