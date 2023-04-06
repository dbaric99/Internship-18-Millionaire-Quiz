import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

function ConfirmDialog({ isOpen, onClose, onConfirm }) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Is that your final answer?</DialogTitle>
      <DialogActions>
        <Button onClick={() => handleConfirm()}>Yes</Button>
        <Button onClick={onClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
}

export { ConfirmDialog };
