import React, { memo } from "react";
import styled from "@emotion/styled";

import { useThemeConfig, ComponentProps } from "../../hooks";
import { Popover } from "../Popover";

export interface DropdownProps
  extends ComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  onChangeOpen?: (isOpen: boolean) => void;
  className?: string;
  listClassname?: string;
  itemClassname?: string;
  dropdownItems?: React.ReactNodeArray;
}

const Component = ({
  style,
  children,
  hover,
  themeCSS: themeCSSProps,
  className,
  listClassname,
  itemClassname,
  dropdownItems,
  isOpen: isOpenProps = false,
  onChangeOpen,
  ...props
}: DropdownProps): React.ReactElement => {
  const themeCSS =
    themeCSSProps ?? useThemeConfig({ ...props, component: "popover" });

  const dropdownList = (
    <DropdownList className={listClassname || "dropdownList"}>
      {dropdownItems?.map((dropdownItem: React.ReactNode, index: number) => (
        <DropdownItem
          key={`dropdownItem/${index}`}
          className={itemClassname || "dropdownItem"}
        >
          {dropdownItem}
        </DropdownItem>
      ))}
    </DropdownList>
  );

  return (
    <Popover
      hover={hover}
      style={style}
      className={className}
      themeCSS={themeCSS}
      isOpen={isOpenProps}
      onChangeOpen={onChangeOpen}
      render={dropdownList}
      {...props}
    >
      {children}
    </Popover>
  );
};

export const Dropdown = memo(Component);

const DropdownList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const DropdownItem = styled.li`
  cursor: pointer;
`;
