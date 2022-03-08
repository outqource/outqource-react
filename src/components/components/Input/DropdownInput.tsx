/* tslint:disable:no-unused-variable */
import styled from "@emotion/styled";
import React, { memo } from "react";
import cx from "classnames";

import { useThemeConfig, ComponentProps } from "../../hooks";

import { Dropdown, DropdownProps } from "../Dropdown";

export interface DropdownInputProps extends ComponentProps, DropdownProps {
  icon?: boolean;
  inputClassname?: string;
}

const Component = ({
  className,
  icon = false,
  children,
  hover,
  listClassname,
  itemClassname,
  inputClassname,
  dropdownItems,
  isOpen: isOpenProps = false,
  onChangeOpen,
  ...props
}: DropdownInputProps): JSX.Element => {
  const themeCSS = useThemeConfig({ ...props, component: "dropdownInput" });

  return (
    <Dropdown
      themeCSS={themeCSS}
      hover={hover}
      className={className}
      listClassname={listClassname}
      itemClassname={itemClassname}
      dropdownItems={dropdownItems}
      isOpen={isOpenProps}
      onChangeOpen={onChangeOpen}
    >
      <InputJSX
        className={cx(inputClassname, { iconInput: icon })}
        {...props}
      />
    </Dropdown>
  );
};

export const DropdownInput = memo(Component);

const InputJSX = styled.input<DropdownInputProps>`
  box-shadow: none;
  border: 0;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  ${(props) => props.themeCSS};
`;
