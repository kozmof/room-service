import { Language } from "./Language"
import { Detail, Mat } from "./EvaluationTableBase"

type SourceEvaluation = "N" | "A" | "B" | "C" | "X";
type InfoEvaluation = 0 | 1 | 2 | 3 | 4;

type Rank5x5 = {
  sourceRank: SourceEvaluation;
  infoRank: InfoEvaluation;
}

export interface Arg5x5 {
  readonly rank: Rank5x5;
  readonly lang: Language;
}

export class EvaluationTable5x5 implements Mat<SourceEvaluation, InfoEvaluation> {
  constructor(
    private rank: Rank5x5 = {sourceRank: "N", infoRank: 0},
    private lang: Language = "EN") {}

  detailSource = (sourceRank: SourceEvaluation): Array < string > => {
    switch (this.lang) {
      case "EN":
        switch (sourceRank) {
          case "N":
            const detN0: string = "Not evaluated yet.";
              return [detN0]
          case "A":
            const detA0: string = "No doubt regarding authenticity, trustworthiness, integrity, competence.";
            const detA1: string = "History of complete reliability.";
              return [detA0, detA1]
          case "B":
            const detB0: string = "Source from whom information received has in most instances proved to be reliable.";
              return [detB0]
          case "C":
            const detC0: string = "Source from whom information received has in most instances proved to be unreliable.";
            return [detC0]
          case "X":
            const detX0: string = "Reliability cannot be judged.";
            return [detX0]
        }
    }
  }

  detailInfo = (infoRank: InfoEvaluation): Array < string > => {
    switch (this.lang) {
      case "EN":
        switch (infoRank) {
          case 0:
            const det00: string = "Not evaluated yet.";
            return [det00]
          case 1:
            const det10: string = "No doubt about accuracy.";
            return [det10]
          case 2:
            const det20: string = "Information known personally to the source but not known personally to the official who is passing it on";
            const det21: string = "Logical in itself.";
            const det22: string = "Agrees with other information on the subject.";
            return [det20, det21, det22]
          case 3:
            const det30: string = "Information not known personally to the source but corroborated by other information already recorded.";
            return [det30]
          case 4:
            const det40: string = "Information which is not known personally to the source and can not be independently corroborated.";
            return [det40]
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
