import React from 'react';
import { EvaluationType } from '../table/EvaluationTableBase';
import { EvaluationArg } from '../table/EvaluationTable';
import { EvaluationRadio3x3, HandleChange3x3 } from './EvaluationRadio3x3';
import { EvaluationRadio5x5, HandleChange5x5 } from './EvaluationRadio5x5';
import { EvaluationRadio7x7, HandleChange7x7 } from './EvaluationRadio7x7';

export type HandleChange <T extends EvaluationType> = 
  T extends "3x3" ? HandleChange3x3:
  T extends "5x5" ? HandleChange5x5:
  T extends "7x7" ? HandleChange7x7:
  never;

interface EvaluationRadioProps <T extends EvaluationType> {
  evaluationType: EvaluationType;
  evaluationArg: EvaluationArg<T>;
  changeHandlers: HandleChange<T>;
}

export const EvaluationRadio = <T extends EvaluationType> (props: EvaluationRadioProps<T>) => {
  const { evaluationType, evaluationArg, changeHandlers } = props;

  switch (evaluationType) {
    case "3x3": {
      const { onChangeSourceRank, onChangeInfoRank, onChangeMalformtype } = changeHandlers as HandleChange3x3;
      return (
        <EvaluationRadio3x3 onChangeSourceRank={onChangeSourceRank} onChangeInfoRank={onChangeInfoRank} onChangeMalformtype={onChangeMalformtype} evaluationArg={evaluationArg as EvaluationArg<"3x3">}/>
      )
    }
    case "5x5": {
      const { onChangeSourceRank, onChangeInfoRank } = changeHandlers as HandleChange5x5;
      return (
        <EvaluationRadio5x5 onChangeSourceRank={onChangeSourceRank} onChangeInfoRank={onChangeInfoRank} evaluationArg={evaluationArg as EvaluationArg<"5x5">}/>
      )
    }
    case "7x7": {
      const { onChangeSourceRank, onChangeInfoRank } = changeHandlers as HandleChange7x7;
      return (
        <EvaluationRadio7x7 onChangeSourceRank={onChangeSourceRank} onChangeInfoRank={onChangeInfoRank} evaluationArg={evaluationArg as EvaluationArg<"7x7">}/>
      )
    }
  }
}

