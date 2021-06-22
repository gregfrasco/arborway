import React, { useEffect } from 'react';
import { Head, Root, Routes } from 'react-static';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react';
import { theme } from './theme';
import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';
import { mdx } from './constants/mdx';
import { ModalProvider } from './hooks/useModal';
import { EventProvider } from './hooks/useEvents';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-98487943-1');
  }, []);
  return (
    <Root>
      <Head>
        <title>The Arborway Committee for Public Transit, Inc</title>
        <meta
          name='Description'
          content="The Arborway Committee for Public Transit, Inc is a volunteer group of residents and merchants of Boston that advocates for quality public transit in the urban environment. Founded in 1976 our chief objective has been to advocate for Jamaica Plain's one seat ride into the central subway system, currently referred to as Boston's E-Line, a branch of the Green Line."
        />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MDXProvider components={{ ...mdx }}>
          <React.Suspense fallback={<em>Loading...</em>}>
            <ModalProvider>
              <EventProvider>
                <Header />
                <div className='content'>
                  <Routes />
                </div>
                <Footer />
              </EventProvider>
            </ModalProvider>
          </React.Suspense>
        </MDXProvider>
      </ThemeProvider>
    </Root>
  );
}

export default App;
