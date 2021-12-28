/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/macro';
import { Button as SUIButton } from 'semantic-ui-react';

const StyledButton = styled(SUIButton)`
  cursor: pointer;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold} !important;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize + ' !important' : '46px !important'};
  color: ${({ color }) =>
    color ? color + ' !important' : '#000000 !important'};
  background: ${({
    disabled,
    background,
    theme: { buttonBackgroundGradient },
  }) => {
    if (background) return background + ' !important';
    if (disabled) return 'transparent !important';
    return buttonBackgroundGradient + '!important';
  }};
  border-radius: 10px !important;
  opacity: 1 !important;
  border: ${({ border }) => {
    if (border) return border + ' !important';
    return '5px dashed #000000 !important';
  }};
  box-shadow: ${({ boxShadow }) => {
    if (boxShadow) return boxShadow + ' !important';
    return 'none !important';
  }};
  --dash-size: 10px;
  /* box-shadow: 0 0 4px #FFFFFF !important; */
  /* :hover {
    opacity: ${({ hover }) => (hover ? 0.7 : 1.0) + ' !important'};
    cursor: pointer;
  } */
`;

const Button = ({
  props,
  disabled,
  border,
  boxShadow,
  buttonStyle,
  background,
  color,
  fontSize,
  children,
  onClick,
  loading,
  hover,
}) => {
  return (
    <StyledButton
      {...props}
      disabled={disabled}
      background={background}
      color={color}
      fontSize={fontSize}
      style={buttonStyle}
      onClick={onClick}
      loading={loading}
      border={border}
      boxShadow={boxShadow}
      hover={hover}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
