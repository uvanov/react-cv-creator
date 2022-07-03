import React from 'react';
import { useTheme } from '@emotion/react';
import {
  Box,
  Typography
} from '@mui/material';

import StyledHeader from './Header.styles';

const Header: React.FC = () => {

  const theme = useTheme();

  return (
    <Box
      component={ StyledHeader }
      justify='center'
      align='center'
      bgcolor={ theme.palette.primary.light }
    >
      <Typography
        variant='h5'
        color='primary.dark'
        fontWeight='bold'
      >
        React CV Creator
      </Typography>

    </Box>
  );
};

export default Header;