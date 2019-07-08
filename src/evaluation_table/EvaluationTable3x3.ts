import { Language } from "./Language"
import { Detail, Mat } from "./EvaluationTableBase"

export type SourceTransparency = "N" | "A" | "B";
export type InfoValidity = 0 | 1 | 2; 
export type MalformType = 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23;

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
    private sourceRank: SourceTransparency = "N", 
    private infoRank: InfoValidity = 0, 
    private malformTypes: Array<MalformType> = [],
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
              const data30: string = "NOT EVALUATED YET";
              const data31: string = "";
              result.push(new Explanation(data30, data31));
            case 5:
              const data50: string = "SATIRE OR PARODY";
              const data51: string = "No intention to cause harm but has potential to fool.";
              result.push(new Explanation(data50, data51));
            case 7:
              const data70: string = "MISLEADING CONTENT";
              const data71: string = "Misleading use of information to frame an issue or individual.";
              result.push(new Explanation(data70, data71));
            case 11:
              const data110: string = "IMPOSTER CONTENT";
              const data111: string = "When genuine sources are impersonated.";
              result.push(new Explanation(data110, data111));
            case 13:
              const data130: string = "FABRICATED CONTENT";
              const data131: string = "New content is 100% false, designed to deceive and do harm.";
              result.push(new Explanation(data130, data131));
            case 17:
              const data170: string = "FALSE CONNECTION";
              const data171: string = "When headlines, visuals or captions don't support the content.";
              result.push(new Explanation(data170, data171));
            case 19:
              const data190: string = "FALSE CONTEXT";
              const data191: string = "When genuine content is shared with false contextual information.";
              result.push(new Explanation(data190, data191));
            case 23:
              const data230: string = "MANIPULATED CONTENT";
              const data231: string = "When genuine information or imagery is manipulated to deceive.";
              result.push(new Explanation(data230, data231));
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
