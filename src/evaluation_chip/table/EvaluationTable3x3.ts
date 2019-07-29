import { Language } from "./Language"
import { Detail, Mat } from "./EvaluationTableBase"

import {
  data_N_0_en, data_A_0_en, data_B_0_en,
  data_0_0_en, data_1_0_en, data_2_0_en
} from "../data/Data3x3"

import {
  data_3_0_mal_en, data_3_1_mal_en,
  data_5_0_mal_en, data_5_1_mal_en,
  data_7_0_mal_en, data_7_1_mal_en,
  data_11_0_mal_en, data_11_1_mal_en,
  data_13_0_mal_en, data_13_1_mal_en,
  data_17_0_mal_en, data_17_1_mal_en,
  data_19_0_mal_en, data_19_1_mal_en,
  data_21_0_mal_en, data_21_1_mal_en
} from "../data/Data3x3"

type SourceTransparency = "N" | "A" | "B";
type InfoValidity = 0 | 1 | 2; 
type MalformType = 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23;

export type Rank3x3 = {
  sourceRank: SourceTransparency;
  infoRank: InfoValidity;
}

interface MalformTable {
  malform(malformTypes: Array<MalformType>): Array<string>
}

class Explanation {
  constructor (
    public readonly subject: string,
    public readonly detail: string
  ) {}
}

export interface Arg3x3 {
  readonly rank: Rank3x3;
  readonly malformTypes: Array<MalformType>;
  readonly lang: Language;
}

export class EvaluationTable3x3 implements Mat<SourceTransparency, InfoValidity> {
  constructor(
    public readonly rank: Rank3x3 = {sourceRank: "N", infoRank: 0},
    public readonly malformTypes: Array<MalformType> = [],
    public readonly lang: Language = "EN"
  ) {}

  detailSource = (sourceTransparency: SourceTransparency) : Array<string> => {
    switch (this.lang) {
      case "EN": 
        switch(sourceTransparency) {
          case "N": 
            return [data_N_0_en];
          case "A":
            return [data_A_0_en];
          case "B":
            return [data_B_0_en];
        }
    } 
  }

  detailInfo = (infoRank: InfoValidity) : Array<string> => {
    switch (this.lang) {
      case "EN": 
        switch(infoRank) {
          case 0:
            return [data_0_0_en];
          case 1:
            return [data_1_0_en];
          case 2:
            return [data_2_0_en];
        }
    } 
  }

  malform = (malformTypes: Array<MalformType>) : Array<Explanation> => {
    let result: Array<Explanation> = [];

    switch (this.lang) {
      case "EN":
        for(let maltype of malformTypes){
          switch(maltype) {
            case 3: 
              result.push(new Explanation(data_3_0_mal_en, data_3_1_mal_en));
            case 5:
              result.push(new Explanation(data_5_0_mal_en, data_5_1_mal_en));
            case 7:
              result.push(new Explanation(data_7_0_mal_en, data_7_1_mal_en));
            case 11:
              result.push(new Explanation(data_11_0_mal_en, data_11_1_mal_en));
            case 13:
              result.push(new Explanation(data_13_0_mal_en, data_13_1_mal_en));
            case 17:
              result.push(new Explanation(data_17_0_mal_en, data_17_1_mal_en));
            case 19:
              result.push(new Explanation(data_19_0_mal_en, data_19_1_mal_en));
            case 23:
              result.push(new Explanation(data_21_0_mal_en, data_21_1_mal_en));
          }
        }

        return result
    } 
  }

  detail = (): Detail => {
    const det3x3: Detail = {
      sourceDetail: this.detailSource(this.rank.sourceRank),
      infoDetail: this.detailInfo(this.rank.infoRank)
    } 
    return det3x3
  }

}
