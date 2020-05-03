import { Language } from './Language';
import { Detail, Mat } from './EvaluationTableBase';

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

type SourceReliability = "N" | "A" | "B" | "C" | "D" | "E" | "F";
type DataValidity = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Rank7x7 = {
  sourceRank: SourceReliability;
  infoRank: DataValidity;
}

interface Tag {
  reliability(sourceRank: SourceReliability): string;
  validity(infoRank: DataValidity): string;
}

export interface Arg7x7 {
  readonly rank: Rank7x7;
  readonly lang: Language;
}

export class EvaluationTable7x7 implements Mat<SourceReliability, DataValidity>, Tag {
  constructor(
    public readonly rank: Rank7x7 = {sourceRank: "N", infoRank: 0},
    public readonly lang: Language = "EN") {}

  detailSource = (sourceRank: SourceReliability): Array < string > => {
    switch(this.lang){
      case "EN": 
        switch(sourceRank){
          case "N":
            return [data_N_0_en];
          case "A":
            return [data_A_0_en, data_A_1_en];
          case "B":
            return [data_B_0_en, data_B_1_en];
          case "C":
            return [data_C_0_en, data_C_1_en];
          case "D":
            return [data_D_0_en, data_D_1_en];
          case "E":
            return [data_E_0_en, data_E_1_en];
          case "F":
            return [data_F_0_en];
          default:
            return [];
        }
      default:
        return [];
    } 
  }

  reliability = (sourceRank: SourceReliability): string => {
    switch(this.lang){
      case "EN":
        switch(sourceRank){
          case "N":
            return data_N_digest_en;
          case "A": 
            return data_A_digest_en;
          case "B":
            return data_B_digest_en;
          case "C":
            return data_C_digest_en;
          case "D":
            return data_D_digest_en;
          case "E":
            return data_E_digest_en;
          case "F":
            return data_F_digest_en;
          default:
            return "";
        } 
      default:
        return "";
    } 
  }

  detailInfo = (infoRank: DataValidity): Array < string > => {
    switch(this.lang){
      case "EN": 
        switch(infoRank){
          case 0: 
            return [data_0_0_en];
          case 1:
            return [data_1_0_en, data_1_1_en, data_1_2_en];
          case 2:
            return [data_2_0_en, data_2_1_en, data_2_2_en];
          case 3:
            return [data_3_0_en, data_3_1_en, data_3_2_en];
          case 4:
            return [data_4_0_en, data_4_1_en, data_4_2_en];
          case 5:
            return [data_5_0_en, data_5_1_en, data_5_2_en];
          case 6:
            return [data_6_0_en];
          default:
            return [];
        }
      default:
        return []
    } 
  }

  validity = (infoRank: DataValidity): string => {
    switch(this.lang){
      case "EN":
        switch(infoRank){
          case 0: 
            return data_0_digest_en;
          case 1:
            return data_1_digest_en;
          case 2:
            return data_2_digest_en;
          case 3:
            return data_3_digest_en;
          case 4:
            return data_4_digest_en;
          case 5:
            return data_5_digest_en;
          case 6:
            return data_6_digest_en;
          default:
            return ""
        }
      default:
        return ""
    }
  }

  detail = (): Detail => {
    const det7x7: Detail = {
      sourceDetail: this.detailSource(this.rank.sourceRank), 
      infoDetail: this.detailInfo(this.rank.infoRank)
    } 

    return det7x7
  }
}
