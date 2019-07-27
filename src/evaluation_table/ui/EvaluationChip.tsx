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

export const EvaluationChip = (props: EvaluationProps) => {
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

  const onCommit = (evaluationType: EvaluationType, evaluationArg: EvaluationArg<typeof evaluationType>) => {
    setOpen(false); 
    // setEvaluationTable
  }

  const onCancel = () => {
    setOpen(false); 
  }
  
  return (
    <div>
      <Button className={classes.button} variant="outlined" color="primary" size="small" onClick={handleOpen}>
        {evaluationTable.rank.sourceRank} {evaluationTable.rank.infoRank}
      </Button>
      { open && 
      <EvaluationDialog<typeof evaluationType> open={open} onCommit={onCommit} onCancel={onCancel} evaluationType={evaluationType} evaluationArg={evaluationArg}/>
      }
    </div>
  );
}
