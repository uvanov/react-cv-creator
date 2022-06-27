import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Props from '../Typography.typings';

export default styled.p<Props>`
  ${props => props.italic && css`
    font-style: italic;
  `}
  
  ${props => props.weight && css`
    font-weight: ${props.weight};
  `}

  ${props => props.align && css`
    text-align: ${props.align};
  `}
  
  ${props => props.variant && css`
    font-size: ${props.theme.typography.variants[props.variant].size}px;
    ${props.theme.typography.variants[props.variant].bold && css`
      font-weight: bold;
    `}
  `}
`;

