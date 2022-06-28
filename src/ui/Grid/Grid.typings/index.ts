import { ReactNode } from 'react';

export default interface GridProps {
  inline?: boolean,
  columns: number | string[],
  rows?: number | string[],
  columnGap?: number,
  rowGap?: number,
  justifyItems?: 'start' | 'end' | 'center' | 'stretch',
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around',
  alignItems?: 'start' | 'end' | 'center' | 'stretch',
  alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around',
  children: ReactNode
}