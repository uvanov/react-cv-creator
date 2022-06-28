import React, { useMemo } from 'react';

import { prepareGridLayout } from '@ui/Grid/Grid.utils';

import StyledGrid from './Grid.styles';
import Props from './Grid.typings';

const Grid: React.FC<Readonly<Props>> = props => {

  const preparedColumns: string = useMemo(() => {
    return prepareGridLayout(props.columns);
  }, [props.columns]);

  const preparedRows: string = useMemo(() => {
    return props.rows ? prepareGridLayout(props.rows) : '';
  }, [props.rows]);

  return (
    <StyledGrid
      { ...props }
      columns={ preparedColumns }
      rows={ preparedRows }
    />
  );
};

export default Grid;