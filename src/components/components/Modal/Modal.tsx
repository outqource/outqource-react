import React, { memo } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';

import { useThemeConfig, ComponentProps } from '../../lib';

export interface ModalProps extends ComponentProps {
  style?: ReactModal.Styles;
  onRequestClose(): void;
  children: string | React.ReactNode | React.ReactNodeArray;
}

export const defaultStyle: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    outline: 'none',
    border: 0,
  },
};

const Component = ({
  children,
  className,
  style = { overlay: {}, content: {} },
  onRequestClose,
  ...props
}: ModalProps): React.ReactElement => {
  const themeCSS = useThemeConfig({ ...props, component: 'modal' });

  return (
    <ModalJSX
      isOpen
      onRequestClose={onRequestClose}
      style={{
        overlay: { ...defaultStyle.overlay, ...style.overlay },
        content: { ...defaultStyle.content, ...style.content },
      }}
      className={className}
      themeCSS={themeCSS}
      {...props}
    >
      {children}
    </ModalJSX>
  );
};

export const Modal = memo(Component);

const ModalJSX = styled(ReactModal)<ModalProps>`
  background-color: #fff;
  border: 0;
  outline: none;
  ${(props) => props.themeCSS};
`;
