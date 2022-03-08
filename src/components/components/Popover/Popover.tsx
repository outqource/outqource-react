import React, { memo, useCallback, useRef, useState } from "react";
import styled from "@emotion/styled";

import { useThemeConfig, ComponentProps, useClickOutside } from "../../hooks";

export interface PopoverProps
  extends ComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  render?: React.ReactNode | React.ReactNodeArray;
  isOpen?: boolean;
  hover?: boolean;
  onChangeOpen?: (isOpen: boolean) => void;
}

const Component = ({
  style,
  className,
  children,
  render,
  hover = false,
  isOpen: isOpenProps = false,
  onChangeOpen,
  themeCSS: themeCSSProps,
  ...props
}: ComponentProps): React.ReactElement => {
  const themeCSS =
    themeCSSProps ?? useThemeConfig({ ...props, component: "popover" });

  const containerRef = useRef<HTMLDivElement>(null);
  const renderRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(isOpenProps);

  const onChangeIsOpen = useCallback(
    (status: boolean) => {
      return () => {
        setIsOpen(status);
        if (onChangeOpen) onChangeOpen(status);
      };
    },
    [onChangeOpen]
  );

  const onMouseEnter = useCallback(() => {
    if (hover) onChangeIsOpen(true)();
  }, [hover, onChangeIsOpen]);

  const onMouseLeave = useCallback(() => {
    if (hover) onChangeIsOpen(false)();
  }, [hover, onChangeIsOpen]);

  useClickOutside([containerRef, renderRef], onChangeIsOpen(false));

  return (
    <PopoverJSX
      ref={containerRef}
      className={className}
      style={style}
      themeCSS={themeCSS}
    >
      <PopoverCore
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onChangeIsOpen(!isOpen)}
        {...props}
      >
        {children}
      </PopoverCore>
      {isOpen && <PopoverChildren ref={renderRef}>{render}</PopoverChildren>}
    </PopoverJSX>
  );
};

export const Popover = memo(Component);

const PopoverJSX = styled.div<PopoverProps>`
  position: relative;
  cursor: pointer;
  ${(props) => props.themeCSS};
`;

const PopoverCore = styled.div<PopoverProps>``;

const PopoverChildren = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
`;
