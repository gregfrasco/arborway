import React, { createContext, useContext, useState, FC } from 'react';
import { ModalNames } from '../constants/modal-names';

export interface ModalContextProps {
  openModal: (modalId: ModalNames | string) => void;
  openedModal?: ModalNames | string;
  closeModal: () => void;
}

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider: FC = (props) => {
  const [openedModal, setOpenedModal] = useState<ModalNames | string>();
  const openModal = (modalId: ModalNames | string) => setOpenedModal(modalId);
  const closeModal = () => setOpenedModal(undefined);
  return <ModalContext.Provider value={{ openModal, openedModal, closeModal }} {...props} />;
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
