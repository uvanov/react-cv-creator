/*
* todo:
*  - Create a required prop to input
*  - Basing on Input create Date
* */
import React from 'react';

import Router from '@providers/Router';
import ThemeProvider from '@providers/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router/>
    </ThemeProvider>
  );
};

export default App;