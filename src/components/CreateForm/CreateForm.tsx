import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { formInitialValues } from './CreateForm.constants';

import { Grid } from '@ui/index';

const CreateForm: React.FC = () => {

  // const [photo, setPhotoFile] = useState('')

  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
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
        <Button
          variant='contained'
          component='label'
        >
          Upload File
          <input
            onChange={ event => console.log(event) }
            type='file'
            hidden
          />
        </Button>
        <Button type='submit' variant='contained'>
          submit
        </Button>
      </Grid>
    </form>
  );
};

export default CreateForm;