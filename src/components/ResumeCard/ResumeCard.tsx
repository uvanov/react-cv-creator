import React from 'react';

import Props from './ResumeCard.typings';
import { Button } from '@ui/index';
import {
  ResumeCardCover,
  StyledResumeCard
} from './ResumeCard.styles';

const ResumeCard: React.FC<Readonly<Props>> = props => (
  <StyledResumeCard imageUrl={ props.imageUrl }>
    <ResumeCardCover
      justify='center'
      align='center'
      link={ props.link }
    >
      <Button
        variant='hybrid'
        size='small'
        // todo: Add redirect to cv by Link from react-router
      >
        OPEN
      </Button>
    </ResumeCardCover>
  </StyledResumeCard>
);

export default ResumeCard;
