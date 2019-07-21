import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { Language } from "./Language";
import { EvaluationType } from "./EvaluationTableBase";
import { EvaluationArg, makeEvaluationTable } from "./EvaluationTable";

export type EvaluationProps = {
  evaluationType: EvaluationType;
  evaluationArg: EvaluationArg<EvaluationType>;
}

type EvaluationDialogProps = {
  open: boolean;
  onClose: () => void;
}

export const EvaluationDialog = (props: EvaluationDialogProps) => {
  const { open, onClose } = props;

  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog onClose={handleClose} open={open} aria-labelledby="evaluation-dialog"> 
      <DialogTitle id="evaluation-dialog"> Evaluation Table </DialogTitle>
      <p> Test </p>
    </Dialog>
  );
}

export const EvaluationChip =  (props: EvaluationProps) => {
  const [open, setOpen] = useState(false);
  const [evaluationTable, setEvaluationTable] = useState(makeEvaluationTable(props.evaluationType, props.evaluationArg));

  const handleOpen = () => {
    setOpen(true); 
  }

  const handleClose = () => {
    setOpen(false); 
  }
  
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        {evaluationTable.rank.sourceRank} {evaluationTable.rank.infoRank}
      </Button>
      <EvaluationDialog open={open} onClose={handleClose} />
    </div>
  );
}
