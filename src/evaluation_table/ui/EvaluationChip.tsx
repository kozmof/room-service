import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';
import { EvaluationDialog } from './EvaluationDialog';
import { EvaluationType } from '../table/EvaluationTableBase';
import { EvaluationArg, makeEvaluationTable } from '../table/EvaluationTable'; 

export type EvaluationProps = { evaluationType: EvaluationType;
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

    chip: {
    }
  });

  const classes = useStyles({});

  const handleOpen = () => {
    setOpen(true); 
  }

  const onCommit = (evaluationType: EvaluationType, evaluationArg: EvaluationArg<typeof evaluationType>) => {
    setEvaluationTable(makeEvaluationTable(evaluationType, evaluationArg))
    setEvaluationType(evaluationType);
    setEvaluationArg(evaluationArg);
    setOpen(false); 
  }

  const onCancel = () => {
    setOpen(false); 
  }
  
  return (
    <div>
      <Chip className={classes.chip} avatar={<Avatar>{evaluationType}</Avatar>} variant="default" size="small" color="default" label={evaluationTable.rank.sourceRank + " " + evaluationTable.rank.infoRank} onClick={handleOpen}/>
      { open && 
      <EvaluationDialog<typeof evaluationType> open={open} onCommit={onCommit} onCancel={onCancel} evaluationType={evaluationType} evaluationArg={evaluationArg}/>
      }
    </div>
  );
}
