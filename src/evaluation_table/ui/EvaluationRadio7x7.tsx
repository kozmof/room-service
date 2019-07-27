import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import { EvaluationArg } from '../table/EvaluationTable';

import {
  data_N_0_en,
  data_A_0_en, data_A_1_en,
  data_B_0_en, data_B_1_en,
  data_C_0_en, data_C_1_en,
  data_D_0_en, data_D_1_en,
  data_E_0_en, data_E_1_en,
  data_F_0_en,
} from "../data/Data7x7"

import {
  data_N_digest_en,
  data_A_digest_en,
  data_B_digest_en,
  data_C_digest_en,
  data_D_digest_en,
  data_E_digest_en,
  data_F_digest_en,
} from "../data/Data7x7"

import {
  data_0_0_en,
  data_1_0_en, data_1_1_en, data_1_2_en,
  data_2_0_en, data_2_1_en, data_2_2_en,
  data_3_0_en, data_3_1_en, data_3_2_en,
  data_4_0_en, data_4_1_en, data_4_2_en,
  data_5_0_en, data_5_1_en, data_5_2_en,
  data_6_0_en,
} from "../data/Data7x7"

import {
  data_0_digest_en,
  data_1_digest_en,
  data_2_digest_en,
  data_3_digest_en,
  data_4_digest_en,
  data_5_digest_en,
  data_6_digest_en,
} from "../data/Data7x7"


export type HandleChange7x7 = {
  onChangeSourceRank: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInfoRank: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type EvaluationRadio7x7props = {
  evaluationArg: EvaluationArg<"7x7">;
} & HandleChange7x7

export const EvaluationRadio7x7 = (props: EvaluationRadio7x7props) => {
  return (
    <DialogContent>
      <FormControl component="fieldset">
        <FormLabel component="label"> 
          <Typography>
            Source Rank 
          </Typography>
        </FormLabel>
        <RadioGroup value={props.evaluationArg.rank.sourceRank} onChange={props.onChangeSourceRank}>
          <FormControlLabel value="N" control={<Radio disableRipple={true} />} label={<Typography>{"N: " + data_N_0_en}</Typography>}/>
          <FormControlLabel value="A" control={<Radio disableRipple={true} />} label={<Typography>{"A: " + data_A_0_en + "\n" + data_A_1_en}</Typography>}/>
          <FormControlLabel value="B" control={<Radio disableRipple={true} />} label={<Typography>{"B: " + data_B_0_en + "\n" + data_B_1_en}</Typography>}/>
          <FormControlLabel value="C" control={<Radio disableRipple={true} />} label={<Typography>{"C: " + data_C_0_en + "\n" + data_C_1_en}</Typography>}/>
          <FormControlLabel value="D" control={<Radio disableRipple={true} />} label={<Typography>{"D: " + data_D_0_en + "\n" + data_D_1_en}</Typography>}/>
          <FormControlLabel value="E" control={<Radio disableRipple={true} />} label={<Typography>{"E: " + data_E_0_en + "\n" + data_E_1_en}</Typography>}/>
          <FormControlLabel value="F" control={<Radio disableRipple={true} />} label={<Typography>{"F: " + data_F_0_en}</Typography>}/>
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="label">
          <Typography>
            Info Rank
          </Typography>
        </FormLabel>
        <RadioGroup value={props.evaluationArg.rank.infoRank.toString()} onChange={props.onChangeInfoRank}>
          <FormControlLabel value={String(0)} control={<Radio disableRipple={true} />} label={<Typography>{"0: " + data_0_0_en}</Typography>}/>
          <FormControlLabel value={String(1)} control={<Radio disableRipple={true} />} label={<Typography>{"1: " + data_1_0_en + "\n" + data_1_1_en + "\n" + data_1_2_en}</Typography>}/>
          <FormControlLabel value={String(2)} control={<Radio disableRipple={true} />} label={<Typography>{"2: " + data_2_0_en + "\n" + data_2_1_en + "\n" + data_2_2_en}</Typography>}/>
          <FormControlLabel value={String(3)} control={<Radio disableRipple={true} />} label={<Typography>{"3: " + data_3_0_en + "\n" + data_3_1_en + "\n" + data_3_2_en}</Typography>}/>
          <FormControlLabel value={String(4)} control={<Radio disableRipple={true} />} label={<Typography>{"4: " + data_4_0_en + "\n" + data_4_1_en + "\n" + data_4_2_en}</Typography>}/>
          <FormControlLabel value={String(5)} control={<Radio disableRipple={true} />} label={<Typography>{"5: " + data_5_0_en + "\n" + data_5_1_en + "\n" + data_5_2_en}</Typography>}/>
          <FormControlLabel value={String(6)} control={<Radio disableRipple={true} />} label={<Typography>{"6: " + data_6_0_en}</Typography>}/>
        </RadioGroup>
      </FormControl>
    </DialogContent>
  )
}

