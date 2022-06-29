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
    box-shadow: 0 0 10px ${hexToRGB(props.theme.palette.error, .5)};
  `}
`;

export const InvalidLabel = styled(Typography)<{ show?: boolean }>`
  position: absolute;
  top: -20px;
  left: 20px;
  color: ${props => props.theme.palette.error};
  
  transition: transform .2s, opacity .2s;
  
  transform: translateY(10px);
  opacity: 0;
  
  ${props => props.show && css`
    transform: translateY(0);
    opacity: 1;
  `}
`;