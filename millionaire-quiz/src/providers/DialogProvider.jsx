import { createContext, useContext, useState } from "react";

const defaultContext = {
  activeDialog: null,
  open: () => {},
  close: () => {},
  additionalProps: {},
};

export const DialogContext = createContext(defaultContext);

const DialogProvider = ({ children }) => {
  const [activeDialog, setActiveDialog] = useState(defaultContext.activeDialog);
  const [additionalProps, setAdditionalProps] = useState(
    defaultContext.additionalProps
  );

  const open = (dialog, additionalProps = {}) => {
    setActiveDialog(dialog);
    setAdditionalProps(additionalProps);
  };

  const close = () => {
    setActiveDialog(null);
    setAdditionalProps({});
  };

  return (
    <DialogContext.Provider
      value={{ activeDialog, additionalProps, open, close }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);

export default DialogProvider;
