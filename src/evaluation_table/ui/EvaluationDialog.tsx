import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

import { 
  data_N_0_en, data_A_0_en, data_B_0_en,
  data_0_0_en, data_1_0_en, data_2_0_en
} from "../data/Data3x3";

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

export const EvaluationRadio3x3 = () => {
  return (
    <DialogContent>
      <FormControl component="fieldset">
        <FormLabel component="label"> 
          <Typography>
            Source Rank 
          </Typography>
        </FormLabel>
        <RadioGroup>
          <FormControlLabel value="N" control={<Radio disableRipple={true} />} label={<Typography>{"N: " + data_N_0_en}</Typography>}/>
          <FormControlLabel value="A" control={<Radio disableRipple={true} />} label={<Typography>{"A: " + data_A_0_en}</Typography>}/>
          <FormControlLabel value="B" control={<Radio disableRipple={true} />} label={<Typography>{"B: " + data_B_0_en}</Typography>}/>
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="label">
          <Typography>
            Info Rank
          </Typography>
        </FormLabel>
        <RadioGroup>
          <FormControlLabel value="0" control={<Radio disableRipple={true} />} label={<Typography>{"0: " + data_0_0_en}</Typography>}/>
          <FormControlLabel value="1" control={<Radio disableRipple={true} />} label={<Typography>{"1: " + data_1_0_en}</Typography>}/>
          <FormControlLabel value="2" control={<Radio disableRipple={true} />} label={<Typography>{"2: " + data_2_0_en}</Typography>}/>
        </RadioGroup>
      </FormControl>
    </DialogContent>
  )
}

type HandleChange3x3 = {
  handleChangeSourceRank: () => void;
  handleChangeInfoRank: () => void;
  handleChangeMalformtype: () => void;
}

type HandleChange5x5= {
  handleChangeSourceRank: () => void;
  handleChangeInfoRank: () => void;
}

type HandleChange7x7= {
  handleChangeSourceRank: () => void;
  handleChangeInfoRank: () => void;
}

type HandleChange <T extends EvaluationType> = 
  T extends "3x3" ? HandleChange3x3:
  T extends "5x5" ? HandleChange5x5:
  T extends "7x7" ? HandleChange7x7:
  never;

interface EvaluationRadioProps <T extends EvaluationType> {
  evaluationType: EvaluationType;
  changeHandlers: HandleChange<T>;
}

export const EvaluationRadio = <T extends EvaluationType> (props: EvaluationRadioProps<T>) => {
  const { evaluationType, changeHandlers } = props;

  switch (evaluationType) {
    case "3x3": {
      const { handleChangeSourceRank, handleChangeInfoRank, handleChangeMalformtype } = changeHandlers as HandleChange3x3;
      return (
        <EvaluationRadio3x3/>
      )
    }
    case "5x5": {
      const { handleChangeSourceRank, handleChangeInfoRank } = changeHandlers as HandleChange5x5;
      return (
        <EvaluationRadio3x3/>
      )
    }
    case "7x7": {
      const { handleChangeSourceRank, handleChangeInfoRank } = changeHandlers as HandleChange7x7;
      return (
        <EvaluationRadio3x3/>
      )
    }
  }
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

  const handleChangeSourceRank = () => {
    // get value from radio buttons
    // setEvaluationStatus();
  }

  const handleChangeInfoRank = () => {
    // get value from radio buttons
    // setEvaluationStatus();
  }

  const handleChangeMalformtype = () => {
  
  }

  const changeHandlersFactory = <T extends EvaluationType> (evaluationType: EvaluationType) => {
    switch(evaluationType) {
      case "3x3": {
        const changeHandlers: HandleChange<"3x3"> = {
          handleChangeSourceRank: handleChangeSourceRank,
          handleChangeInfoRank: handleChangeInfoRank,
          handleChangeMalformtype: handleChangeMalformtype
        }
      }
      case "5x5": {
        const changeHandlers: HandleChange<"5x5"> = {
          handleChangeSourceRank: handleChangeSourceRank,
          handleChangeInfoRank: handleChangeInfoRank,
        }
      }
      case "7x7": {
        const changeHandlers: HandleChange<"7x7"> = {
          handleChangeSourceRank: handleChangeSourceRank,
          handleChangeInfoRank: handleChangeInfoRank,
        }
      }
    }
    return changeHandlers;
  }

  const changeHandlers: HandleChange<typeof evaluationType> = changeHandlersFactory<typeof evaluationType>(evaluationType); 

  return (
    <Dialog onClose={onCancel} open={open} aria-labelledby="evaluation-dialog" transitionDuration={0}> 
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
