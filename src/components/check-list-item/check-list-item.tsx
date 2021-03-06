import React, { FC } from 'react';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

interface CheckListItemProps {
  text: string;
}

const CheckListItem: FC<CheckListItemProps> = ({ text }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <CheckIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary={<Typography variant='h6'>{text}</Typography>} />
    </ListItem>
  );
};

export { CheckListItem };
