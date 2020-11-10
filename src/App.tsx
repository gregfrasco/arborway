import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HomePage } from './pages/home.page';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutUsPage } from './pages/about-us.page';
import { FAQPage } from './pages/faq.page';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/'>
              <HomePage />
            </Route>
            <Route path='/about-us'>
              <AboutUsPage />
            </Route>
            <Route path='/faq'>
              <FAQPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
