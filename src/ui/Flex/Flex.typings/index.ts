export default interface FlexProps {
  inline?: boolean,
  direction?: 'column' | 'column-reverse' | 'row-reverse' | 'row',
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around',
  align?: 'flex-start' | 'center' | 'flex-end',
  gap?: number | { x: number, y: number }
};