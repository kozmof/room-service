import { Data, DataID } from "../common_type"
import { Rank5x5, SourceEvaluation, InfoEvaluation } from "../evaluation_table/evaluation_table_5x5"
import { Rank7x7, SourceReliability, DataValidity } from "../evaluation_table/evaluation_table_7x7"

// Ex: A => B (A phoned B)

interface MediumArrow {
    readonly arrow_id: DataID;
    readonly core_sentence: string;
    src_x: number;
    src_y: number;
    dst_x: number;
    dst_y: number;
}

interface Subject {
    readonly subject_id: DataID
}

interface Object {
    readonly object_id: DataID
}

interface LinkData {
    date: Date;
}

interface LinkData5x5 extends Rank5x5 {
    data: LinkData;
}

interface LinkData7x7 extends Rank7x7 {
    data: LinkData;
}

class Link implements Subject, Object, MediumArrow {
    constructor (public link_id: DataID, public subject_id: DataID, public object_id: DataID, public arrow_id: DataID, public core_sentence: string, public src_x: number, public src_y: number, public dst_x: number, public dst_y: number){}

    subject_data = (): Data => {
        return    
    }

    object_data = (): Data => {
        return    
    }
}

