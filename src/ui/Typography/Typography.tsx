import React from 'react';
import { StyledTypography } from './Typography.styles';

import Props from './Typography.typings';

const Typography: React.FC<Readonly<Props>> = (props) => (
  <StyledTypography { ...props } />
);

export default Typography;