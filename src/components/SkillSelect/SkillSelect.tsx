import React, { SyntheticEvent, useState } from 'react';
import {
  Autocomplete,
  TextField
} from '@mui/material';

const SkillSelect: React.FC = () => {

  const [skills, setSkills] = useState<object[]>([
    { label: 'React' },
    { label: 'ES6' },
    { label: 'TypeScript' },
  ]);
  const [selectedSkills, setSelectedSkills] = useState<object[]>([]);

  const onInputChange = (event: SyntheticEvent, inputValue: string) => {
    if (inputValue.endsWith(',')) {
      const newSkill = { label: inputValue.slice(0, inputValue.length - 1) };
      setSkills(prevState => [...prevState, newSkill]);
      setSelectedSkills(prevState => [...prevState, newSkill]);
    }
  };

  return (
    <Autocomplete
      value={ selectedSkills }
      multiple
      id='checkboxes-tags-demo'
      onChange={ (_, value) => setSelectedSkills(value) }
      onInputChange={ onInputChange }
      options={ skills }
      disableCloseOnSelect
      renderInput={ params => (
        <TextField { ...params } label='Skills' placeholder='Favorites' />
      ) }
    />
  );
};

export default SkillSelect;