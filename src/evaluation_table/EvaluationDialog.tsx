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
import { Language } from './Language';
import { Rank } from './EvaluationTableBind';
import { EvaluationArg, makeEvaluationTable } from './EvaluationTable';

import { 
  data_N_0_en, data_A_0_en, data_B_0_en,
  data_0_0_en, data_1_0_en, data_2_0_en
} from "./data/Data3x3";

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
    <Dialog onClose={handleClose} open={open} aria-labelledby="evaluation-dialog" transitionDuration={0}> 
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
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Commit
        </Button>
        <Button onClick={handleClose} color="primary" >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
