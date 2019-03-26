import { Language } from "./language";

type SourceEvaluation = "N" | "A" | "B" | "C" | "X";
type InfoEvaluation = 0 | 1 | 2 | 3 | 4;

interface Mat5x5 {
    source_rank: SourceEvaluation;
    info_rank: InfoEvaluation;
}

interface Detail5x5 {
    source_detail: Array < string > ;
    info_detail: Array < string > ;
}

export class EvaluationTable5x5 implements Mat5x5 {
    constructor(public source_rank: SourceEvaluation = "N", public info_rank: InfoEvaluation = 0, private lang: Language = "EN") {}

    detail_source = (source_rank: SourceEvaluation): Array < string > => {
        switch (this.lang) {
            case "EN":
                switch (source_rank) {
                    case "N":
                        const det_n0: string = "Not evaluated yet.";
                        return [det_n0]
                    case "A":
                        const det_a0: string = "No doubt regarding authenticity, trustworthiness, integrity, competence.";
                        const det_a1: string = "History of complete reliability.";
                        return [det_a0, det_a1]
                    case "B":
                        const det_b0: string = "Source from whom information received has in most instances proved to be reliable.";
                        return [det_b0]
                    case "C":
                        const det_c0: string = "Source from whom information received has in most instances proved to be unreliable.";
                        return [det_c0]
                    case "X":
                        const det_x0: string = "Reliability cannot be judged.";
                        return [det_x0]
                }
        }
    }

    detail_info = (info_rank: InfoEvaluation): Array < string > => {
        switch (this.lang) {
            case "EN":
                switch (info_rank) {
                    case 0:
                        const det_00: string = "Not evaluated yet.";
                        return [det_00]
                    case 1:
                        const det_10: string = "No doubt about accuracy.";
                        return [det_10]
                    case 2:
                        const det_20: string = "Information known personally to the source but not known personally to the official who is passing it on";
                        const det_21: string = "Logical in itself.";
                        const det_22: string = "Agrees with other information on the subject.";
                        return [det_20, det_21, det_22]
                    case 3:
                        const det_30: string = "Information not known personally to the source but corroborated by other information already recorded.";
                        return [det_30]
                    case 4:
                        const det_40: string = "nformation which is not known personally to the source and can not be independently corroborated.";
                        return [det_40]
                }
        }
    }

    detail = (): Detail5x5 => {
        const det5x5 = {
            source_detail: this.detail_source(this.source_rank),
            info_detail: this.detail_info(this.info_rank)
        }
        return det5x5
    }
}
