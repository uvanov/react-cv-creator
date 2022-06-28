import { ReactNode } from 'react';
import themeConfig from '@lib/theme';

type TypographyVariants = keyof typeof themeConfig.typography.variants;

export default interface TypographyProps {
  variant: TypographyVariants
  italic?: boolean,
  weight?: number | 'bold',
  align?: 'left' | 'center' | 'right',
  children: ReactNode
}
