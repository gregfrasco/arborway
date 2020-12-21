import React from 'react';
import { Root, Routes } from 'react-static';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme';
import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';

function App() {
  return (
    <Root>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Header />
          <div className='content'>
            <Routes />
          </div>
          <Footer />
        </React.Suspense>
      </ThemeProvider>
    </Root>
  );
}

export default App;
