import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Props from '../Typography.typings'

export const StyledTypography = styled.p<Props>`
  ${props => props.italic && css`
    font-style: italic;
  `}
  
  ${props => props.weight && css`
    font-weight: ${ props.weight };
  `}

  ${props => props.align && css`
    text-align: ${ props.align };
  `}
`;

