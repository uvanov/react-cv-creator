import React from 'react';

import {
  StyledNavigation,
  NavigationGrid
} from './Navigation.styles';
import { Button } from '@ui/index';
import ResumeCard from '@components/ResumeCard/ResumeCard';

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <Button
        variant='outlined'
        size='large'
        fullWidth
      >
        + Create Resume
      </Button>

      <NavigationGrid
        columns={ 2 }
        columnGap={ 100 }
        rowGap={ 10 }
      >
        <ResumeCard/>
      </NavigationGrid>

    </StyledNavigation>
  );
};

export default Navigation;