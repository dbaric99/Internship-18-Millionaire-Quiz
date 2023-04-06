import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function ActionDialog({isOpen, onClose, title, text}) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{text}</DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
  )
}

export {ActionDialog}