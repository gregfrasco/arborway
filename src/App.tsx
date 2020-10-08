import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HomePage } from './pages/home.page';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
