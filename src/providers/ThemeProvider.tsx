import React from 'react';
import { ThemeProvider as Provider } from '@emotion/react';
import theme from '@lib/theme';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = props => (
  <Provider
    theme={ theme }
    children={ props.children }
  />
);

export default ThemeProvider;

