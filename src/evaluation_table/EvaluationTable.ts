import { EvaluationTable3x3, Arg3x3 } from "./EvaluationTable3x3";
import { EvaluationTable5x5, Arg5x5 } from "./EvaluationTable5x5";
import { EvaluationTable7x7, Arg7x7 } from "./EvaluationTable7x7";

export type EvaluationType = "3x3" | "5x5" | "7x7";

export type EvaluationTable<E extends EvaluationType> = 
  E extends "3x3" ? EvaluationTable3x3:
  E extends "5x5" ? EvaluationTable5x5:
  E extends "7x7" ? EvaluationTable7x7:
  never;

export type EvaluationArg<E extends EvaluationType> = 
  E extends "3x3" ? Arg3x3:
  E extends "5x5" ? Arg5x5:
  E extends "7x7" ? Arg7x7:
  never;

const makeEvaluationTable = (evaluationType: EvaluationType, arg: EvaluationArg<typeof evaluationType>) : EvaluationTable<typeof evaluationType> => {
  switch (evaluationType) {
    case "3x3": 
      const arg3x3: Arg3x3 = arg as Arg3x3;
      return new EvaluationTable3x3(arg3x3.rank, arg3x3.malformTypes, arg3x3.lang);
    case "5x5":
      const arg5x5: Arg5x5 = arg as Arg5x5;
      return new EvaluationTable5x5(arg5x5.rank, arg5x5.lang);
    case "7x7":
      const arg7x7: Arg7x7 = arg as Arg7x7;
      return new EvaluationTable7x7(arg7x7.rank, arg7x7.lang);
  }
}

