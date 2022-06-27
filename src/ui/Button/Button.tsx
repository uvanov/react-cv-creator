/** @jsxImportSource @emotion/react */
import React from 'react';

import Props from './Button.typings';
import StyledButton from './Button.styles';
import { BUTTON_VARIANTS } from './Button.constants';

const Button: React.FC<Readonly<Props>> = props => {
  return (
    <StyledButton
      css={ BUTTON_VARIANTS[props.variant] }
      { ...props }
    >
      { props.children }
    </StyledButton>
  );
};

export default Button;