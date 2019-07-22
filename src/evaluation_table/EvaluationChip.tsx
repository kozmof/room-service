import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { EvaluationDialog } from './EvaluationDialog';
import { EvaluationType } from './EvaluationTableBase';
import { EvaluationArg, makeEvaluationTable } from './EvaluationTable';

export type EvaluationProps = {
  evaluationType: EvaluationType;
  evaluationArg: EvaluationArg<EvaluationType>;
}

type EvaluationDialogProps = {
  open: boolean;
  onClose: () => void;
}

export const EvaluationChip =  (props: EvaluationProps) => {
  const [open, setOpen] = useState(false);
  const [evaluationTable, setEvaluationTable] = useState(makeEvaluationTable(props.evaluationType, props.evaluationArg));
  const useStyles = makeStyles({
    button: {
      borderRadius: '25px'
    },
  });

  const classes = useStyles({});

  const handleOpen = () => {
    setOpen(true); 
  }

  const handleClose = () => {
    setOpen(false); 
  }
  
  return (
    <div>
      <Button className={classes.button} variant="outlined" color="primary" size="small" onClick={handleOpen}>
        {evaluationTable.rank.sourceRank} {evaluationTable.rank.infoRank}
      </Button>
      <EvaluationDialog open={open} onClose={handleClose} />
    </div>
  );
}
