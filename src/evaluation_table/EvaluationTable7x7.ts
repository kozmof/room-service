import { Language } from "./Language";
import { Detail, Mat } from "./EvaluationTableBase"

export type SourceReliability = "N" | "A" | "B" | "C" | "D" | "E" | "F";
export type DataValidity = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Rank7x7 {
  sourceRank: SourceReliability;
  infoRank: DataValidity;
}

interface Tag {
  reliability(sourceRank: SourceReliability): string;
  validity(infoRank: DataValidity): string;
}

export class EvaluationTable7x7 implements Mat<SourceReliability, DataValidity>, Rank7x7, Tag {
  constructor(
    private sourceRank: SourceReliability = "N", 
    private infoRank: DataValidity = 0, 
    private lang: Language = "EN") {}

  detailSource = (sourceRank: SourceReliability): Array < string > => {
    switch(this.lang){
      case "EN": 
        switch(sourceRank){
          case "N":
            const detN0: string = "Not yet evaluated yet.";
            return [detN0]
          case "A":
            const detA0: string = "No doubt regarding authenticity, trustworthiness, integrity, competence.";
            const detA1: string = "History of complete reliability.";
            return [detA0, detA1]
          case "B":
            const detB0: string = "Some doubt regarding authenticity or trustworthiness or integrity or competence (one count).";
            const detB1: string = "History of general reliability.";
            return [detB0, detB1]
          case "C":
            const detC0: string = "Doubt regarding authenticity, trustworthiness, integrity, competence (two counts and more).";
            const detC1: string = "History of periodic reliability.";
            return [detC0, detC1]
          case "D":
            const detD0: string = "Definite doubt regarding authenticity, trustworthiness, integrity, competence.";
            const detD1: string = "History of occasional reliability.";
            return [detD0, detD1]
          case "E":
            const detE0: string = "Certainty about lack of authenticity, trustworthiness, integrity, competence.";
            const detE1: string = "History of unreliability.";
            return [detE0, detE1]
          case "F":
            const detF0: string = "Cannot be judged.";
            return [detF0]
        }
    } 
  }

  reliability = (sourceRank: SourceReliability): string => {
    switch(this.lang){
      case "EN":
        switch(sourceRank){
          case "N":
            return "NOT EVALUATED YET"
          case "A": 
            return "COMPLETELY RELIABLE"
          case "B":
            return "USUALY RELIABLE"
          case "C":
            return "FAIRLY RELIABLE"
          case "D":
            return "USUALY NOT RELIABLE"
          case "E":
            return "UNRELIABLE"
          case "F":
            return ""
        } 
    } 
  }

  detailInfo = (infoRank: DataValidity): Array < string > => {
    switch(this.lang){
      case "EN": 
        switch(infoRank){
          case 0: 
            const det00: string = "Not yet evaluated yet.";
            return [det00]
          case 1:
            const det10: string = "Confirmed by other independent sources.";
            const det11: string = "Logical in itself.";
            const det12: string = "Agrees with other information on the subject.";
            return [det10, det11, det12]
          case 2:
            const det20: string = "Not confirmed independently.";
            const det21: string = "Logical in itself.";
            const det22: string = "Agrees with other information on the subject.";
            return [det20, det21, det22]
          case 3:
            const det30: string = "Not confirmed.";
            const det31: string = "Logical in itself.";
            const det32: string = "Agrees somewhat with other information on the subject.";
            return [det30, det31, det32]
          case 4:
            const det40: string = "Not confirmed.";
            const det41: string = "Not illogical.";
            const det42: string = "Not believed at time of receipt although possible.";
            return [det40, det41, det42]
          case 5:
            const det50: string = "Confirmation available of the contrary.";
            const det51: string = "Illogical in itself.";
            const det52: string = "ontradicted by other information on the subject.";
            return [det50, det51, det52]
          case 6:
            const det60: string = "Cannot be judged.";
        }
    } 
  }

  validity = (infoRank: DataValidity): string => {
    switch(this.lang){
      case "EN":
        switch(infoRank){
          case 0: 
            return "NOT EVALUATED YET"
          case 1:
            return "CONFIRMED"
          case 2:
            return "PROBABLY TRUE"
          case 3:
            return "POSSIBLY TRUE"
          case 4:
            return "DOUBTFULLY TRUE"
          case 5:
            return "IMPROBABLE"
          case 6:
            return ""
        }
    }
  }

  detail = (): Detail => {
    const det7x7 = {
      sourceDetail: this.detailSource(this.sourceRank), 
      infoDetail: this.detailInfo(this.infoRank)
    } 

    return det7x7
  }
}
