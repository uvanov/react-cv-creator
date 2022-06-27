import { css } from '@emotion/react';

import { ButtonVariantFunction } from '../Button.typings';

const primary: ButtonVariantFunction = theme => css`
  color: ${theme.palette.darkskyblue};
  background-color: ${theme.palette.skyblue};
  border: 0;
`;

const outlined: ButtonVariantFunction = theme => css`
  color: ${theme.palette.darkskyblue};
  border: 2px solid ${theme.palette.darkskyblue};
  background-color: transparent;
`;

export const BUTTON_VARIANTS = { outlined, primary };