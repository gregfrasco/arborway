import React, { FC } from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';

interface FAQProps {
  question: string;
  answer?: string;
}

const FAQ: FC<FAQProps> = ({ question, answer, children }) => {
  return (
    <Card style={{ marginBottom: 25 }}>
      <CardContent>
        <Typography variant='h5' color='primary' style={{ fontWeight: 'bold', marginBottom: 5 }}>
          {question}
        </Typography>
        {answer && <Typography>{answer}</Typography>}
        {!answer && children}
      </CardContent>
    </Card>
  );
};

export { FAQ };
