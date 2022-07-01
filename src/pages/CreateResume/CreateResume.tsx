import React from 'react';

import { Typography } from '@mui/material';
import CreateForm from '@components/CreateForm/CreateForm';
import StyledCreateResume from './CreateResume.styles';

const CreateResume: React.FC = () => {
  return (
    <StyledCreateResume>
      <Typography
        variant='h6'
        fontWeight='bold'
      >
        Create New Resume
      </Typography>
      <CreateForm />
    </StyledCreateResume>
  );
};

export default CreateResume;