import { ReactNode } from 'react';

export default interface TypographyProps {
  variant: 'large' | 'middle' | 'small',
  italic?: boolean,
  weight?: number | 'bold',
  align?: 'left' | 'center' | 'right',
  children: ReactNode
};;;;;;;;;;;
