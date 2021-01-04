import React, { FC } from 'react';
import { Box, useTheme } from '@material-ui/core';

const Section: FC = ({ children }) => {
  const { spacing } = useTheme();
  return <Box style={{ marginTop: spacing(8), marginBottom: spacing(8) }}>{children}</Box>;
};

export { Section };
