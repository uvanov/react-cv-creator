/*
* TODO:
*  - Create theme object
*  - Create Button Component
* */
import React from 'react';

import Router from '@providers/Router';
import ThemeProvider from '@providers/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;