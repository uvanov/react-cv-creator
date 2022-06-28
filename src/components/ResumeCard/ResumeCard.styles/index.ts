import styled from '@emotion/styled';

import Props from '../ResumeCard.typings';
import { Flex } from '@ui/index';
import { hexToRGB } from '@utils/index';

export const StyledResumeCard = styled.div<Pick<Props, 'imageUrl'>>`
  position: relative;
  overflow: hidden;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &:hover{
    div {
      opacity: 1;
    }
  }
`;

export const ResumeCardCover = styled(Flex)<Pick<Props, 'link'>>`
  height: 250px;
  background-color: ${props => hexToRGB(props.theme.palette.white, .8)};
  opacity: 0;
  transition: .3s opacity;
`;