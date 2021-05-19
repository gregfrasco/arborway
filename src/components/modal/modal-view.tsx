import React, { FC } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';

import { ModalProps } from './modal';
import { IconButton } from '@material-ui/core';
import { useModal } from '../../hooks/useModal';
import { makeStyles } from '@material-ui/core/styles';

interface ModalViewProps {
  currentOpen?: string;
}

const useStyles = makeStyles(({ spacing }) => ({
  closeButton: {
    position: 'absolute',
    right: spacing(1),
    top: spacing(1)
  }
}));

const ModalView: FC<ModalProps & ModalViewProps> = (props) => {
  const classes = useStyles();
  const { closeModal } = useModal();
  const { children, currentOpen, message, name, title } = props;

  return (
    <Dialog fullWidth={true} maxWidth='md' open={currentOpen === name} onClose={closeModal}>
      {title && (
        <DialogTitle>
          <Typography variant='h6'>{title}</Typography>
          <IconButton aria-label='close' onClick={closeModal} className={classes.closeButton}>
            <Close />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent>
        {message && <Typography variant='body2'>{message}</Typography>}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export { ModalView, ModalViewProps };
