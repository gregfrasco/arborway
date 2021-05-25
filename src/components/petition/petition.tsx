import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';

const Petition: FC = () => {
  return (
    <Card style={{ height: '100vh' }}>
      <CardHeader title='Sign our petition' />
      <CardContent>
        <Typography>Help us provided high quality reliable transportation for Hyde Square residents.</Typography>
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
