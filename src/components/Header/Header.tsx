import React from 'react';

import { Typography } from '../../ui';

import StyledHeader from './Header.styles';

const Header: React.FC = () => {
  return (
    <StyledHeader justify='space-between'>
      <Typography
        variant='large'
        weight='bold'
      >
        React CV Creator
      </Typography>
    </StyledHeader>
  );
};

export default Header;