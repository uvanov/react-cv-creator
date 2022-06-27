import React from 'react';
import StyledFlex from './Flex.styles';

import Props from './Flex.typings';

const Flex: React.FC<Readonly<Props>> = props => (
  <StyledFlex { ...props } />
);

export default Flex;