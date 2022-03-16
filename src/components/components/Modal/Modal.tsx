import React, { memo } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';

import { useThemeConfig, ComponentProps } from '../../hooks';
import { useMemo } from 'react';

export interface ModalProps extends ComponentProps, Omit<Omit<ReactModal.Props, 'isOpen'>, 'className'> {
  isOpen?: boolean;
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

const Component = React.forwardRef(({ children, className, onRequestClose, isOpen = true, ...props }: ModalProps, ref: React.Ref<ReactModal>) => {
  const themeCSS = useThemeConfig({ ...props, component: 'modal' });
  const overrideStyle = useMemo(
    (): ReactModal.Styles => ({
      overlay: { ...defaultStyle.overlay, ...(props?.style?.overlay ?? {}) },
      content: { ...defaultStyle.content, ...(props?.style?.content ?? {}) },
    }),
    [props.style]
  );

  return (
    <ModalJSX
      ref={ref}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={overrideStyle}
      className={className}
      themeCSS={themeCSS}
      ariaHideApp={false}
      {...props}
    >
      {children}
    </ModalJSX>
  );
});

export const Modal = memo(Component);

const ModalJSX = styled(ReactModal)<ModalProps>`
  background-color: #fff;
  border: 0;
  outline: none;
  ${(props) => props.themeCSS};
`;
