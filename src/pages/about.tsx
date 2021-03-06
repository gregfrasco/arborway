import React from 'react';

import { Container } from '@material-ui/core';

import AboutUs from '../content/about/about-us.mdx';
import BoardOfDirectors from '../content/about/board-of-directors.mdx';

export default () => (
  <Container>
    <AboutUs />
    <BoardOfDirectors />
  </Container>
);
