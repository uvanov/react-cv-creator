import styled from '@emotion/styled';
// import { css } from '@emotion/react';

import { Flex } from '../../../ui';

export default styled(Flex)`
  background-color: ${props => props.theme.palette.skyblue};
  color: ${props => props.theme.palette.darkskyblue};
  padding: 25px 100px;
  transition: .3s;
`;