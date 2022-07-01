import React from 'react';
import { TextField } from '@mui/material';
import { Flex } from '@ui/index';

const CreateForm: React.FC = () => {
  return (
    <div>
      <Flex>
        <TextField
          required
          variant='outlined'
          label='Name'
        />
        <TextField
          required
          variant='outlined'
          label='Name'
        />
        <TextField
          required
          variant='outlined'
          label='Name'
        />
      </Flex>
    </div>
  );
};

export default CreateForm;