import React from 'react';
import { useParams } from 'react-router-dom';

const Resume: React.FC = () => {

  const { id } = useParams();

  return (
    <div>
      Resume with id { id }
    </div>
  );
};

export default Resume;