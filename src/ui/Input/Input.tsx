import React from 'react';

import Props from './Input.typings';
import {
  InputWrapper,
  StyledInput,
  InvalidLabel
} from './Input.styles';

const Input: React.FC<Readonly<Props>> = props => {
  return (
    <InputWrapper
      fullWidth={ props.fullWidth }
    >
      <StyledInput { ...props }/>
      <InvalidLabel
        variant='small'
        show={ props.invalid }
      >
        Invalid value
      </InvalidLabel>
    </InputWrapper>
  );
};

export default Input;