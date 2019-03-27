import { Language } from "./language";
import { Detail, Mat } from "./evaluation_table_base"

type SourceReliability = "N" | "A" | "B" | "C" | "D" | "E" | "F";
type DataValidity = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface Tag {
        reliability(source_rank: SourceReliability): string;
        validity(info_rank: DataValidity): string;
}

export class EvaluationTable7x7 implements Mat<SourceReliability, DataValidity>, Tag{
    constructor(public source_rank: SourceReliability = "N", public info_rank: DataValidity = 0, private lang: Language = "EN"){}

    detail_source = (source_rank: SourceReliability): Array < string > => {
        switch(this.lang){
            case "EN": 
                switch(source_rank){
                    case "N":
                        const det_n0: string = "Not yet evaluated yet.";
                        return [det_n0]
                    case "A":
                        const det_a0: string = "No doubt regarding authenticity, trustworthiness, integrity, competence.";
                        const det_a1: string = "History of complete reliability.";
                        return [det_a0, det_a1]
                    case "B":
                        const det_b0: string = "Some doubt regarding authenticity or trustworthiness or integrity or competence (one count).";
                        const det_b1: string = "History of general reliability.";
                        return [det_b0, det_b1]
                    case "C":
                        const det_c0: string = "Doubt regarding authenticity, trustworthiness, integrity, competence (two counts and more).";
                        const det_c1: string = "History of periodic reliability.";
                        return [det_c0, det_c1]
                    case "D":
                        const det_d0: string = "Definite doubt regarding authenticity, trustworthiness, integrity, competence.";
                        const det_d1: string = "History of occasional reliability.";
                        return [det_d0, det_d1]
                    case "E":
                        const det_e0: string = "Certainty about lack of authenticity, trustworthiness, integrity, competence.";
                        const det_e1: string = "History of unreliability.";
                        return [det_e0, det_e1]
                    case "F":
                        const det_f0: string = "Cannot be judged.";
                        return [det_f0]
                }
        } 
    }

    reliability = (source_rank: SourceReliability): string => {
        switch(this.lang){
            case "EN":
                switch(source_rank){
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

    detail_info = (info_rank: DataValidity): Array < string > => {
        switch(this.lang){
            case "EN": 
                switch(info_rank){
                    case 0: 
                        const det_00: string = "Not yet evaluated yet.";
                        return [det_00]
                    case 1:
                        const det_10: string = "Confirmed by other independent sources.";
                        const det_11: string = "Logical in itself.";
                        const det_12: string = "Agrees with other information on the subject.";
                        return [det_10, det_11, det_12]
                    case 2:
                        const det_20: string = "Not confirmed independently.";
                        const det_21: string = "Logical in itself.";
                        const det_22: string = "Agrees with other information on the subject.";
                        return [det_20, det_21, det_22]
                    case 3:
                        const det_30: string = "Not confirmed.";
                        const det_31: string = "Logical in itself.";
                        const det_32: string = "Agrees somewhat with other information on the subject.";
                        return [det_30, det_31, det_32]
                    case 4:
                        const det_40: string = "Not confirmed.";
                        const det_41: string = "Not illogical.";
                        const det_42: string = "Not believed at time of receipt although possible.";
                        return [det_40, det_41, det_42]
                    case 5:
                        const det_50: string = "Confirmation available of the contrary.";
                        const det_51: string = "Illogical in itself.";
                        const det_52: string = "ontradicted by other information on the subject.";
                        return [det_50, det_51, det_52]
                    case 6:
                        const det_60: string = "Cannot be judged.";
                }
        } 
    }

    validity = (info_rank: DataValidity): string => {
        switch(this.lang){
            case "EN":
                switch(info_rank){
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
            source_detail: this.detail_source(this.source_rank), 
            info_detail: this.detail_info(this.info_rank)
        } 

        return det7x7
    }
}
