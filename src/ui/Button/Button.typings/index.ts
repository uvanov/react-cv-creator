import { ReactNode } from 'react';
import {
  SerializedStyles,
  Theme
} from '@emotion/react';
import { BUTTON_VARIANTS } from '../Button.constants';

export type ButtonVariantFunction = (theme: Theme) => SerializedStyles;

export default interface ButtonProps {
  variant: keyof typeof BUTTON_VARIANTS,
  addon?: 'plus',
  size?: 'small' | 'middle' | 'large',
  fullWidth?: boolean,
  children: ReactNode
}