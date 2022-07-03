import React from 'react';
import { useFormik } from 'formik';
import {
  Chip,
  Divider,
  TextField
} from '@mui/material';
import { formInitialValues } from './CreateForm.constants';

import { Grid } from '@ui/index';
import SkillSelect from '@components/SkillSelect/SkillSelect';

const CreateForm: React.FC = () => {



  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: values => {
      console.log(values);
    }
  });


  return (
    <form onSubmit={ formik.handleSubmit }>
      <Divider>
        <Chip label='INFORMATION'/>
      </Divider>
      <Grid
        columns={ 3 }
        columnGap={ 50 }
        rowGap={ 30 }
      >
        <TextField
          id='information.name'
          name='information.name'
          required
          variant='outlined'
          label='Name'
          onChange={ formik.handleChange }
        />
        <TextField
          id='information.surname'
          name='information.surname'
          required
          variant='outlined'
          label='Surname'
          onChange={ formik.handleChange }
        />
        <TextField
          type='date'
          id='information.dob'
          name='information.dob'
          required
          variant='outlined'
          label='DOB'
          onChange={ formik.handleChange }
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type='file'
          id='information.photo'
          name='information.photo'
          variant='outlined'
          label='Photo'
          onChange={ event => console.log(event) }
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Divider>
        <Chip label='SKILLS' />
      </Divider>
      <SkillSelect />
    </form>
  );
};

export default CreateForm;