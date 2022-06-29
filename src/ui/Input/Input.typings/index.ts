import { ChangeEvent } from 'react';

export default interface InputProps {
  value: string,
  placeholder?: string,
  fullWidth?: boolean,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  invalid?: boolean
}

