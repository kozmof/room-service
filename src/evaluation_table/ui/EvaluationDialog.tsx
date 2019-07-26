import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { EvaluationType } from '../table/EvaluationTableBase';
import { EvaluationArg } from '../table/EvaluationTable';
import { Arg3x3 } from '../table/EvaluationTable3x3';
import { Arg5x5 }  from '../table/EvaluationTable5x5';
import { Arg7x7 } from '../table/EvaluationTable7x7';
import { Language } from '../table/Language';
import { EvaluationRadio, HandleChange } from './EvaluationRadio';

export const SelectMatrix = () => {
  return (
    <DialogActions>
      <Select value="3x3">
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
}

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
    // pass new values to the parent
    onCommit(evaluationType, evaluationArg);
  }

  const cancel = () => {
    onCancel();
  }

  const onChangeSourceRank = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sourceRank = event.currentTarget.value;
    setEvaluationStatus(Object.assign({}, evaluationStatus, { sourceRank: sourceRank }));
  }

  const onChangeInfoRank = (event: React.ChangeEvent<HTMLInputElement>) => {
    const infoRank = event.currentTarget.value;
    setEvaluationStatus(Object.assign({}, evaluationStatus, { infoRank: infoRank }));
  }
    // setEvaluationStatus();

  const onChangeMalformtype = (event: React.ChangeEvent<HTMLInputElement>) => {
  
  }

  const changeHandlersFactory = <T extends EvaluationType> (evaluationType: EvaluationType) => {
    switch(evaluationType) {
      case "3x3": {
        const changeHandlers: HandleChange<"3x3"> = {
          onChangeSourceRank: onChangeSourceRank,
          onChangeInfoRank: onChangeInfoRank,
          onChangeMalformtype: onChangeMalformtype 
        }
        return changeHandlers;
      }
      case "5x5": {
        const changeHandlers: HandleChange<"5x5"> = {
          onChangeSourceRank: onChangeSourceRank,
          onChangeInfoRank: onChangeInfoRank
        }
        return changeHandlers;
      }
      case "7x7": {
        const changeHandlers: HandleChange<"7x7"> = {
          onChangeSourceRank: onChangeSourceRank,
          onChangeInfoRank: onChangeInfoRank
        }
        return changeHandlers;
      }
    }
  }


  const changeHandlers: HandleChange<typeof evaluationType> = changeHandlersFactory<typeof evaluationType>(evaluationType); 

  return (
    <Dialog onClose={()=>cancel()} open={open} aria-labelledby="evaluation-dialog" transitionDuration={0}> 
      <SelectMatrix />
      <EvaluationRadio evaluationType={evaluationType} changeHandlers={changeHandlers}/>
      <DialogActions>
        <Button onClick={()=>commit(evaluationType, evaluationStatus)} color="primary" autoFocus>
          Commit
        </Button>
        <Button onClick={()=>cancel()} color="primary" >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
