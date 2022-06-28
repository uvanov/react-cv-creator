import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Props from '../Grid.typings';
// It's a type, where "columns" is a string only, but developer must be able to pass string or string[]
type ModifiedProps = Omit<Props, 'columns' | 'rows' > & { columns: string, rows: string };

export default styled.div<ModifiedProps>`
  display: ${props => (props.inline ? 'inline-grid' : 'grid')};
  grid-template-columns: ${props => props.columns};
  
  ${props => props.rows && css`
    grid-template-rows: ${props.rows};
  `}

  ${props => props.columnGap && css`
    column-gap: ${props.columnGap}px;
  `}

  ${props => props.rowGap && css`
    row-gap: ${props.rowGap}px;
  `}

  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}

  ${props => props.alignContent && css`
    align-content ${props.alignContent};
  `}

  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}

  ${props => props.justifyItems && css`
    justify-items: ${props.justifyItems};
  `}
`;