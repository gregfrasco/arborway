import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

const style = { paddingTop: 6, paddingBottom: 6 };

const mdx: { [key: string]: FC } = {
  h1: (props) => <Typography style={style} variant='h1' {...props} />,
  h2: (props) => <Typography style={style} variant='h2' {...props} />,
  h3: (props) => <Typography style={style} variant='h3' {...props} />,
  h4: (props) => <Typography style={style} variant='h4' {...props} />,
  h5: (props) => <Typography style={style} variant='h5' {...props} />,
  h6: (props) => <Typography style={style} variant='h6' {...props} />,
  p: (props) => <Typography style={style} {...props} />
};

export { mdx };
