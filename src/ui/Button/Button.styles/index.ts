import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Props from '../Button.typings';

export default styled.button<Props>`
  
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  font-family: inherit;
  cursor: pointer;
  transition: .2s;
  
  ${props => props.fullWidth && css`
    width: 100% !important;
  `}
  
  &:hover {
    transform: translateY(-3px);
  }
  
  &:focus {
    outline: 1px solid black;
  }
  
  ${props => props.size === 'small' && css`
    height: 30px;
    width: 80px;
  `}

  ${props => props.size === 'middle' && css`
    height: 40px;
    width: 100px;
  `}

  ${props => props.size === 'large' && css`
    height: 45px;
    width: 130px;
  `}
`;
