import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

import { 
  data_N_0_en, data_A_0_en, data_B_0_en,
  data_0_0_en, data_1_0_en, data_2_0_en
} from "../data/Data3x3";

export type HandleChange3x3 = {
  onChangeSourceRank: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInfoRank: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMalformtype: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EvaluationRadio3x3 = (props: HandleChange3x3) => {
  return (
    <DialogContent>
      <FormControl component="fieldset">
        <FormLabel component="label"> 
          <Typography>
            Source Rank 
          </Typography>
        </FormLabel>
        <RadioGroup>
          <FormControlLabel value="N" control={<Radio disableRipple={true} onChange={props.onChangeSourceRank}/>} label={<Typography>{"N: " + data_N_0_en}</Typography>}/>
          <FormControlLabel value="A" control={<Radio disableRipple={true} onChange={props.onChangeSourceRank}/>} label={<Typography>{"A: " + data_A_0_en}</Typography>}/>
          <FormControlLabel value="B" control={<Radio disableRipple={true} onChange={props.onChangeSourceRank}/>} label={<Typography>{"B: " + data_B_0_en}</Typography>}/>
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="label">
          <Typography>
            Info Rank
          </Typography>
        </FormLabel>
        <RadioGroup>
          <FormControlLabel value="0" control={<Radio disableRipple={true} onChange={props.onChangeInfoRank}/>} label={<Typography>{"0: " + data_0_0_en}</Typography>}/>
          <FormControlLabel value="1" control={<Radio disableRipple={true} onChange={props.onChangeInfoRank}/>} label={<Typography>{"1: " + data_1_0_en}</Typography>}/>
          <FormControlLabel value="2" control={<Radio disableRipple={true} onChange={props.onChangeInfoRank}/>} label={<Typography>{"2: " + data_2_0_en}</Typography>}/>
        </RadioGroup>
      </FormControl>
    </DialogContent>
  )
}


