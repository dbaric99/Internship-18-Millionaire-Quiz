import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

function InfoDialog({ isOpen, onClose, onRestart }) {
  const handleRestart = () => {
    onRestart();
    onClose();
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>You won $1M</DialogTitle>
      <DialogActions>
        <Button onClick={handleRestart}>Try your luck again!</Button>
      </DialogActions>
    </Dialog>
  );
}

export { InfoDialog };
