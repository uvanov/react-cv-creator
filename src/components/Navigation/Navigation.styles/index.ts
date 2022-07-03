import styled from '@emotion/styled';

import { Grid } from '@ui/index';
import { hexToRGB } from '@utils/index';

export const StyledNavigation =  styled.div`
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 10px 0 30px ${hexToRGB('#000000', .1)};
`;

export const NavigationGrid = styled(Grid)`
  margin-top: 20px;
`;