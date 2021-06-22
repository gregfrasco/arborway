import React, { FC } from 'react';
import { Link, Typography } from '@material-ui/core';

const Copyright: FC = () => {
  return (
    <>
      <Link component={Typography} align='center' color='primary' href='/' style={{ fontWeight: 'bold' }}>
        The Arborway Committee for Public Transit, Inc.
      </Link>
      <Typography variant='body2' color='textSecondary' align='center'>
        A 501(c)(3) Organization
      </Typography>
      <Link component={Typography} variant='body2' align='center' color='primary' href='mailto:arborway.committee@gmail.com'>
        Arborway.Committee@gmail.com
      </Link>
      <Typography variant='body2' color='textSecondary' align='center'>
        c/o 51R Eliot Street Jamaica Plain 02130
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        Copyright © {new Date().getFullYear()}.
      </Typography>
    </>
  );
};

export { Copyright };
