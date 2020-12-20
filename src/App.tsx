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
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact={true} path='/about-us' component={AboutUsPage} />
          <Route exact={true} path='/faq' component={FAQPage} />
          <Route exact={true} path='/' component={HomePage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
