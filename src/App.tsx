import React from 'react';
import { Root, Routes } from 'react-static';
import {ThemeProvider, CssBaseline } from '@material-ui/core';
import {MDXProvider} from '@mdx-js/react'
import { theme } from './theme';
import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';
import { mdx } from './constants/mdx';

function App() {
  return (
    <Root>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MDXProvider components={{ ...mdx }}>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Header />
            <div className='content'>
              <Routes />
            </div>
            <Footer />
          </React.Suspense>
        </MDXProvider>
      </ThemeProvider>
    </Root>
  );
}

export default App;
