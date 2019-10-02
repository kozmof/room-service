import { EvaluationType } from './EvaluationTableBase';
import { Rank3x3 } from './EvaluationTable3x3';
import { Rank5x5 } from './EvaluationTable5x5';
import { Rank7x7 } from './EvaluationTable7x7';

export type Rank<T extends EvaluationType> =
  T extends "3x3" ? Rank3x3:
  T extends "5x5" ? Rank5x5:
  T extends "7x7" ? Rank7x7:
  never
