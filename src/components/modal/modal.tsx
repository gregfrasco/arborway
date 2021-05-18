import React, { FC } from 'react';
import { useModal } from '../../hooks/useModal';
import { ModalView, ModalViewProps } from 'components/modal/modal-view';

export interface ModalProps {
  message?: string;
  name?: string | undefined;
  title?: string;
}

const Modal: FC<ModalProps & ModalViewProps> = (props) => {
  const { openedModal } = useModal();

  return <ModalView {...props} currentOpen={openedModal} />;
};

export { Modal };
