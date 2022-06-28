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
    padding: 0 10px;
  `}

  ${props => props.size === 'middle' && css`
    font-size: 15px;
    height: 40px;
    padding: 0 20px;
  `}

  ${props => props.size === 'large' && css`
    font-size: 17px;
    height: 45px;
    padding: 0 30px;
  `}
`;
