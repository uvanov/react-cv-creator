import styled from '@emotion/styled';

import { Flex } from '@ui/index';

export default styled(Flex)`
  position: relative;
  z-index: 5;
  grid-column: 1 / 3;
  background-color: ${props => props.theme.palette.skyblue};
  color: ${props => props.theme.palette.darkskyblue};
  padding: 25px 100px;
  transition: .3s;
`;