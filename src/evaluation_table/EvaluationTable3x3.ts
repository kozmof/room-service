import { Language } from "./Language"
import { Detail, Mat } from "./EvaluationTableBase"

export type SourceTransparency = "N" | "A" | "B";
export type InfoValidity = 0 | 1 | 2; 
export type MalformType = 3 | 5 | 7 | 11 | 13 | 17 | 19;

export interface Rank3x3 {
  sourceRank: SourceTransparency;
  infoRank: InfoValidity;
}

export interface MalformTable {
  malform(malformTypes: Array<MalformType>): Array<string>
}

class Explanation {
  constructor (
    public readonly subject: string,
    public readonly detail: string
  ) {}
}

export class EvaluationTable3x3 implements Mat<SourceTransparency, InfoValidity>, Rank3x3 {
  constructor(
    public sourceRank: SourceTransparency = "N", 
    public infoRank: InfoValidity = 0, 
    private lang: Language = "EN"
  ) {}

  detailSource = (sourceTransparency: SourceTransparency) : Array<string> => {
    switch (this.lang) {
      case "EN": 
        switch(sourceTransparency) {
          case "N": 
            const dataN0: string = "Not evaluated yet.";
            return [dataN0]
          case "A":
            const dataA0: string = "Source has valid author.";
            return [dataA0]
          case "B":
            const dataB0: string = "No valid author.";
            return [dataB0]
        }
    } 
  }

  detailInfo = (infoRank: InfoValidity) : Array<string> => {
    switch (this.lang) {
      case "EN": 
        switch(infoRank) {
          case 0:
            const data00: string = "Not evaluated yet.";
            return [data00]
          case 1:
            const data10: string = "Valid information.";
            return [data10]
          case 2:
            const data20: string = "Invalid infoRank.";
            return [data20]
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
              const data100: string = "SATIRE OR PARODY";
              const data101: string = "No intention to cause harm but has potential to fool.";
              result.push(new Explanation(data100, data101));
            case 5:
              const data200: string = "MISLEADING CONTENT";
              const data201: string = "Misleading use of information to frame an issue or individual.";
              result.push(new Explanation(data200, data201));
            case 7:
              const data300: string = "IMPOSTER CONTENT";
              const data301: string = "When genuine sources are impersonated.";
              result.push(new Explanation(data300, data301));
            case 11:
              const data400: string = "FABRICATED CONTENT";
              const data401: string = "New content is 100% false, designed to deceive and do harm.";
              result.push(new Explanation(data400, data401));
            case 13:
              const data500: string = "FALSE CONNECTION";
              const data501: string = "When headlines, visuals or captions don't support the content.";
              result.push(new Explanation(data500, data501));
            case 17:
              const data600: string = "FALSE CONTEXT";
              const data601: string = "When genuine content is shared with false contextual information.";
              result.push(new Explanation(data600, data601));
            case 19:
              const data700: string = "MANIPULATED CONTENT";
              const data701: string = "When genuine information or imagery is manipulated to deceive.";
              result.push(new Explanation(data700, data701));
          }
        }

        return result
    } 
  }

  detail = (): Detail => {
    const det3x3 = {
      sourceDetail: this.detailSource(this.sourceRank),
      infoDetail: this.detailInfo(this.infoRank)
    } 
    return det3x3
  }

}
