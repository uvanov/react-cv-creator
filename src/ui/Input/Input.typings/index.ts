import { ChangeEvent } from 'react';

export default interface InputProps {
  type?: string,
  value: string,
  required?: boolean,
  placeholder?: string,
  fullWidth?: boolean,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  invalid?: boolean
}

