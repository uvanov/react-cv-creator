import React from 'react';
import {
  css,
  Global,
  ThemeProvider as Provider
} from '@emotion/react';

import themeConfig from '@lib/theme';

const ThemeProvider = props => (
  <Provider theme={ themeConfig }>
    <Global styles={ css`

      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
      
      html, body, #root {
        height: 100%;
      }
      
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      ul, ol, p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
      }
    ` }/>
    { props.children }
  </Provider>
);

export default ThemeProvider;

