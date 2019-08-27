import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { EvaluationType } from '../table/EvaluationTableBase';
import { EvaluationArg } from '../table/EvaluationTable';
import { EvaluationRadio, HandleChange } from './EvaluationRadio';

type SelectMatrixProps = {
  evaluationType: EvaluationType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectMatrix = React.memo((props: SelectMatrixProps) => {
  return (
    <DialogActions>
      <Select value={props.evaluationType} onChange={props.onChange}>
        <MenuItem value="3x3">
          <Typography>
            3x3
          </Typography>
        </MenuItem>
        <MenuItem value="5x5">
          <Typography>
            5x5
          </Typography>
        </MenuItem>
        <MenuItem value="7x7"> 
          <Typography>
            7x7 
          </Typography>
        </MenuItem>
      </Select>
    </DialogActions>
  )
})

type EvaluationDialogProps<T extends EvaluationType> = {
  open: boolean;
  onCommit: (evaluationType: EvaluationType, evaluationArg: EvaluationArg<T>) => void;
  onCancel: () => void;
  evaluationType: EvaluationType;
  evaluationArg: EvaluationArg<T>;
}

export const EvaluationDialog = <T extends EvaluationType> (props: EvaluationDialogProps<T>) => {
  const { open, onCommit, onCancel, evaluationType, evaluationArg } = props;
  const [ selectedEvaluationType, setSelectedEvaluationType ] = useState(evaluationType);
  const [ evaluationStatus, setEvaluationStatus ] = useState(evaluationArg);

  const commit = (evaluationType: EvaluationType, evaluationArg: EvaluationArg<T>) => {
    onCommit(evaluationType, evaluationArg);
  }

  const cancel = () => {
    onCancel();
  } 
  const onChangeSourceRank = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sourceRank = event.currentTarget.value;
    setEvaluationStatus(
      {
        ...evaluationStatus, 
        rank: {
          ...evaluationStatus.rank,
          sourceRank: sourceRank
        }
      }
    );
  }

  const onChangeInfoRank = (event: React.ChangeEvent<HTMLInputElement>) => {
    const infoRank = event.currentTarget.value;
    setEvaluationStatus(
      {
        ...evaluationStatus, 
        rank: {
          ...evaluationStatus.rank,
          infoRank: infoRank 
        }
      }
    );
  }

  const onChangeMalformtype = (event: React.ChangeEvent<HTMLInputElement>) => {
  
  }

  const onChangeMatrix = (event: React.ChangeEvent<HTMLInputElement>) => {
    const evaluationType = event.target.value as EvaluationType;
    setSelectedEvaluationType(evaluationType)
    setEvaluationStatus(
      Object.assign(
        {},
        evaluationStatus,
        {
          ...evaluationStatus, 
          rank: {
            sourceRank: "N", 
            infoRank: 0, 
          }
        }
      )
    );
  }

  const changeHandlersFactory = <T extends EvaluationType> (evaluationType: EvaluationType) => {
    switch(evaluationType) {
      case "3x3": {
        const changeHandlers: HandleChange<"3x3"> = {
          onChangeSourceRank: onChangeSourceRank,
          onChangeInfoRank: onChangeInfoRank,
          onChangeMalformtype: onChangeMalformtype,
        }
        return changeHandlers;
      }
      case "5x5": {
        const changeHandlers: HandleChange<"5x5"> = {
          onChangeSourceRank: onChangeSourceRank,
          onChangeInfoRank: onChangeInfoRank,
        }
        return changeHandlers;
      }
      case "7x7": {
        const changeHandlers: HandleChange<"7x7"> = {
          onChangeSourceRank: onChangeSourceRank,
          onChangeInfoRank: onChangeInfoRank,
        }
        return changeHandlers;
      }
    }
  }

  const changeHandlers: HandleChange<typeof evaluationType> = changeHandlersFactory<typeof evaluationType>(evaluationType); 

  return (
    <Dialog onClose={()=>cancel()} open={open} aria-labelledby="evaluation-dialog" transitionDuration={0}> 
      <SelectMatrix evaluationType={selectedEvaluationType} onChange={onChangeMatrix}/>
      <EvaluationRadio<typeof selectedEvaluationType> evaluationType={selectedEvaluationType} evaluationArg={evaluationStatus} changeHandlers={changeHandlers}/>
      <DialogActions>
        <Button onClick={()=>commit(selectedEvaluationType, evaluationStatus)} color="primary" autoFocus>
          Commit
        </Button>
        <Button onClick={()=>cancel()} color="primary" >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
