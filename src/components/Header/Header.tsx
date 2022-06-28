import React from 'react';

import { Typography } from '../../ui';

import StyledHeader from './Header.styles';

const Header: React.FC = () => {
  return (
    <StyledHeader
      justify='center'
      align='center'
    >
      <Typography
        variant='large'
      >
        React CV Creator
      </Typography>

    </StyledHeader>
  );
};

export default Header;