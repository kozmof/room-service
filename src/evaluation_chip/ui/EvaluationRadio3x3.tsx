import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { EvaluationArg } from '../table/EvaluationTable';
import { ProvideContent } from './RadioContentProvider';

import { 
  data_N_0_en, data_A_0_en, data_B_0_en,
  data_0_0_en, data_1_0_en, data_2_0_en
} from "../data/Data3x3";

export type HandleChange3x3 = {
  onChangeSourceRank: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInfoRank: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMalformtype: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type EvaluationRadio3x3props = {
  evaluationArg: EvaluationArg<"3x3">;
} & HandleChange3x3

export const EvaluationRadio3x3 = React.memo((props: EvaluationRadio3x3props) => {
  return (
    <DialogContent>
      <FormControl component="fieldset">
        <FormLabel component="label"> 
          <Typography>
            Source Rank 
          </Typography>
        </FormLabel>
        <RadioGroup value={props.evaluationArg.rank.sourceRank} onChange={props.onChangeSourceRank}>
          <FormControlLabel value="N" control={<Radio color="primary" disableRipple={true} />} label={<ProvideContent signature="N" descriptionList={[data_N_0_en]}/>}/>
          <Divider variant="middle" />
          <FormControlLabel value="A" control={<Radio color="primary" disableRipple={true} />} label={<ProvideContent signature="A" descriptionList={[data_A_0_en]}/>}/>
          <Divider variant="middle" />
          <FormControlLabel value="B" control={<Radio color="primary" disableRipple={true} />} label={<ProvideContent signature="B" descriptionList={[data_B_0_en]}/>}/>
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="label">
          <Typography>
            Info Rank
          </Typography>
        </FormLabel>
        <RadioGroup value={props.evaluationArg.rank.infoRank.toString()} onChange={props.onChangeInfoRank}>
          <FormControlLabel value="0" control={<Radio color="primary" disableRipple={true} />} label={<ProvideContent signature="0" descriptionList={[data_0_0_en]}/>}/>
          <Divider variant="middle" />
          <FormControlLabel value="1" control={<Radio color="primary" disableRipple={true} />} label={<ProvideContent signature="1" descriptionList={[data_1_0_en]}/>}/>
          <Divider variant="middle" />
          <FormControlLabel value="2" control={<Radio color="primary" disableRipple={true} />} label={<ProvideContent signature="2" descriptionList={[data_2_0_en]}/>}/>
        </RadioGroup>
      </FormControl>
    </DialogContent>
  )
})


