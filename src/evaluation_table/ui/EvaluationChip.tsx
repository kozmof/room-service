import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { EvaluationDialog } from './EvaluationDialog';
import { EvaluationType } from '../table/EvaluationTableBase';
import { EvaluationArg, makeEvaluationTable } from '../table/EvaluationTable';

export type EvaluationProps = {
  evaluationType: EvaluationType;
  evaluationArg: EvaluationArg<EvaluationType>;
}

interface EvaluationDialogProps {
  open: boolean;
  onCommit: (evaluationType: EvaluationType, evaluationArg: EvaluationArg<typeof evaluationType>) => void;
  onCancel: () => void;
}

export const EvaluationChip =  (props: EvaluationProps) => {
  const [open, setOpen] = useState(false);
  const [evaluationType, setEvaluationType] = useState(props.evaluationType);
  const [evaluationArg, setEvaluationArg] = useState(props.evaluationArg);
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

  const handleCommit = (evaluationType: EvaluationType, evaluationArg: EvaluationArg<typeof evaluationType>) => {
    setOpen(false); 
    // setEvaluationTable
  }

  const handleCancel = () => {
    setOpen(false); 
  }
  
  return (
    <div>
      <Button className={classes.button} variant="outlined" color="primary" size="small" onClick={handleOpen}>
        {evaluationTable.rank.sourceRank} {evaluationTable.rank.infoRank}
      </Button>
      <EvaluationDialog open={open} onCommit={handleCommit} onCancel={handleCancel} evaluationType={evaluationType} evaluationArg={evaluationArg}/>
    </div>
  );
}
