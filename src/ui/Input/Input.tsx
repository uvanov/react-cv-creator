import React from 'react';

import Props from './Input.typings';
import {
  InputWrapper,
  StyledInput,
  InvalidLabel
} from './Input.styles';

const Input: React.FC<Readonly<Props>> = ({ placeholder, ...props }) => {
  return (
    <InputWrapper
      fullWidth={ props.fullWidth }
    >
      <StyledInput { ...props }/>
      <InvalidLabel
        variant='small'
        invalid={ props.invalid }
      >
        { placeholder }
        { props.required && ' *' }
      </InvalidLabel>
    </InputWrapper>
  );
};

export default Input;