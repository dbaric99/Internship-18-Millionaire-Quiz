import {
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
  } from "@mui/material";
import { useQuestion } from "../../../providers/QuestionProvider";

function ConfirmDialog({isOpen, onClose}) {
  const {nextQuestion} = useQuestion();

    const handleConfirm = () => {
        nextQuestion();
        onClose();
    }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Is that your final answer?</DialogTitle>
      <DialogActions>
        <Button onClick={handleConfirm}>Yes</Button>
        <Button onClick={onClose}>No</Button>
      </DialogActions>
    </Dialog>
  )
}

export {ConfirmDialog}