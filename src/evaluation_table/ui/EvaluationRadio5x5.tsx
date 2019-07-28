import React from 'react'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { provideContent } from './RadioContentProvider';
import { EvaluationArg } from '../table/EvaluationTable';

import {
  data_N_0_en,
  data_A_0_en, data_A_1_en,
  data_B_0_en,
  data_C_0_en,
  data_X_0_en,
} from '../data/Data5x5';

import {
  data_0_0_en,
  data_1_0_en,
  data_2_0_en, data_2_1_en, data_2_2_en,
  data_3_0_en,
  data_4_0_en
} from '../data/Data5x5';

export type HandleChange5x5 = {
  onChangeSourceRank: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInfoRank: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type EvaluationRadio5x5props = {
  evaluationArg: EvaluationArg<"5x5">;
} & HandleChange5x5

export const EvaluationRadio5x5 = React.memo((props: EvaluationRadio5x5props) => {
  return (
    <DialogContent>
      <FormControl component="fieldset">
        <FormLabel component="label"> 
          <Typography>
            Source Rank 
          </Typography>
        </FormLabel>
        <RadioGroup value={props.evaluationArg.rank.sourceRank} onChange={props.onChangeSourceRank}>
          <FormControlLabel value="N" control={<Radio disableRipple={true} />} label={provideContent("N", [data_N_0_en])}/>
          <Divider variant="middle" />
          <FormControlLabel value="A" control={<Radio disableRipple={true} />} label={provideContent("A", [data_A_0_en, data_A_1_en])}/>
          <Divider variant="middle" />
          <FormControlLabel value="B" control={<Radio disableRipple={true} />} label={provideContent("B", [data_B_0_en])}/>
          <Divider variant="middle" />
          <FormControlLabel value="C" control={<Radio disableRipple={true} />} label={provideContent("C", [data_C_0_en])}/>
          <Divider variant="middle" />
          <FormControlLabel value="X" control={<Radio disableRipple={true} />} label={provideContent("X", [data_X_0_en])}/>
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="label">
          <Typography>
            Info Rank
          </Typography>
        </FormLabel>
        <RadioGroup value={props.evaluationArg.rank.infoRank.toString()} onChange={props.onChangeInfoRank}>
          <FormControlLabel value={String(0)} control={<Radio disableRipple={true} />} label={provideContent(String(0), [data_0_0_en])}/>
          <Divider variant="middle" />
          <FormControlLabel value={String(1)} control={<Radio disableRipple={true} />} label={provideContent(String(1), [data_1_0_en])}/>
          <Divider variant="middle" />
          <FormControlLabel value={String(2)} control={<Radio disableRipple={true} />} label={provideContent(String(2), [data_2_0_en, data_2_1_en, data_2_2_en])}/>
          <Divider variant="middle" />
          <FormControlLabel value={String(3)} control={<Radio disableRipple={true} />} label={provideContent(String(3), [data_3_0_en])}/>
          <Divider variant="middle" />
          <FormControlLabel value={String(4)} control={<Radio disableRipple={true} />} label={provideContent(String(4), [data_4_0_en])}/>
        </RadioGroup>
      </FormControl>
    </DialogContent>
  )
})

