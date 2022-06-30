import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Typography } from '@ui/index';
import Props from '../Input.typings';
import { hexToRGB } from '@utils/index';

export const InputWrapper = styled.div<Pick<Props, 'fullWidth'>>`
  position: relative;
  width: fit-content;
  margin-top: 20px;
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
`;

export const StyledInput = styled.input<Props>`
  width: 100%;
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0 0 20px ${props => hexToRGB(props.theme.palette.black, .2)};
  box-sizing: border-box;
  font-size: ${props => props.theme.typography.variants.medium.size}px;
  transition: box-shadow .3s;
  
  ${props => props.invalid && css`
    border: 1px solid ${props.theme.palette.error};
  `}
`;

export const InvalidLabel = styled(Typography)<{ invalid?: boolean }>`
  position: absolute;
  top: -9px;
  left: 20px;
  color: ${props => props.theme.palette.black};
  transition: color .2s;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 9px;
    transform: translateX(-4px);
    
    display: block;
    background-color: white;
    width: 120%;
    height: 10px;

    z-index: -1;
    
  }
  
  ${props => props.invalid && css`
    color: ${props.theme.palette.error};
  `}
`;