import { Language } from "./Language"
import { Detail, Mat } from "./EvaluationTableBase"

import {
  data_N_0_en, 
  data_A_0_en, data_A_1_en,
  data_B_0_en,
  data_C_0_en,
  data_X_0_en
} from "./data/Data5x5"

import {
  data_0_0_en, 
  data_1_0_en,
  data_2_0_en, data_2_1_en, data_2_2_en,
  data_3_0_en,
  data_4_0_en
} from "./data/Data5x5"


type SourceEvaluation = "N" | "A" | "B" | "C" | "X";
type InfoEvaluation = 0 | 1 | 2 | 3 | 4;

export type Rank5x5 = {
  sourceRank: SourceEvaluation;
  infoRank: InfoEvaluation;
}

export interface Arg5x5 {
  readonly rank: Rank5x5;
  readonly lang: Language;
}

export class EvaluationTable5x5 implements Mat<SourceEvaluation, InfoEvaluation> {
  constructor(
    public readonly rank: Rank5x5 = {sourceRank: "N", infoRank: 0},
    public readonly lang: Language = "EN") {}

  detailSource = (sourceRank: SourceEvaluation): Array < string > => {
    switch (this.lang) {
      case "EN":
        switch (sourceRank) {
          case "N":
            return [data_N_0_en];
          case "A":
            return [data_A_0_en, data_A_1_en];
          case "B":
            return [data_B_0_en];
          case "C":
            return [data_C_0_en];
          case "X":
            return [data_X_0_en];
        }
    }
  }

  detailInfo = (infoRank: InfoEvaluation): Array < string > => {
    switch (this.lang) {
      case "EN":
        switch (infoRank) {
          case 0:
            return [data_0_0_en];
          case 1:
            return [data_1_0_en];
          case 2:
            return [data_2_0_en, data_2_1_en, data_2_2_en];
          case 3:
            return [data_3_0_en];
          case 4:
            return [data_4_0_en];
        }
    }
  }

  detail = (): Detail => {
    const det5x5: Detail = {
      sourceDetail: this.detailSource(this.rank.sourceRank),
      infoDetail: this.detailInfo(this.rank.infoRank)
    }
    return det5x5
  }
}
