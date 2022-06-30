import React, { useState } from 'react';
import Input from '@ui/Input/Input';

const CreateResume: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      Create Resume
      <Input
        value={ value }
        placeholder='Placeholder'
        onChange={ event => setValue(event.target.value) }
      />
    </div>
  );
};

export default CreateResume;