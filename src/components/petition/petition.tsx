import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

const Petition: FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography>Sign our petition in support of the Green Line Extension to Hyde Square</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='primary'
          href='https://www.change.org/p/the-mbta-and-massachusetts-public-officials-extend-the-e-line-along-south-huntington-ave-from-heath-street-to-hyde-sq'>
          Sign on Change.org
        </Button>
      </CardActions>
    </Card>
  );
};

export { Petition };
