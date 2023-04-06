import { useDialog } from "../../providers/DialogProvider";
import { dialogConstants } from "../../constants/dialogConstants";
import { ActionDialog } from "./ActionDialog";
import { ConfirmDialog } from "./ConfirmDialog";
import {InfoDialog} from "./InfoDialog";

const SwitchDialog = () => {
  const { activeDialog, additionalProps, close } = useDialog();

  return (
    <>
        <ActionDialog 
            isOpen={activeDialog === dialogConstants.dialogType.ACTION_DIALOG}
            onClose={close}
            {...additionalProps}
        />
        <ConfirmDialog 
            isOpen={activeDialog === dialogConstants.dialogType.CONFIRM_DIALOG}
            onClose={close}
            {...additionalProps}
        />
        <InfoDialog 
            isOpen={activeDialog === dialogConstants.dialogType.INFO_DIALOG}
            onClose={close}
            {...additionalProps}
        />
    </>
  );
};

export {SwitchDialog};
