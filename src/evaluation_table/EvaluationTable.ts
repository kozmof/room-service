import { EvaluationTable5x5 } from "./EvaluationTable5x5";
import { EvaluationTable7x7 } from "./EvaluationTable7x7";

export type EvaluationType = "5x5" | "7x7";

export type EvaluationTable<E extends EvaluationType> = 
  E extends "5x5" ? EvaluationTable5x5:
  E extends "7x7" ? EvaluationTable7x7:
  never;

