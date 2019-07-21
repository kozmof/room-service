import { EvaluationType } from "../evaluation_table/EvaluationTableBase"
import { EvaluationTable } from "../evaluation_table/EvaluationTable"
import { PersonID, DataID, DataType, UserAction } from "../common/CommonType"


export type Data = {
  readonly id: DataID;
  readonly dataType: DataType;
  readonly MD5: string;
}

export type MetaDataEvaluation <E extends EvaluationType> = {
  readonly evaluationType: E;
  readonly evaluationTable: EvaluationTable<E>;
}

export type MetaDataPerson = {
  readonly authorName: string;
  readonly authorID: PersonID;
  readonly editorName: string;
  readonly editorID: PersonID;
}

type ModifiedDataType = "text";

export type MetaDataLog = {
  readonly userAction: UserAction;
  readonly modifiedDataType: ModifiedDataType;
  readonly time: Date;
}

// TODO
export type MetaDataSource = {
  readonly source: Array<string>;
}

// TODO
export type MetaDataCategory = {
  readonly category: Array<string>;
}

// TODO
export type MetaDataTag = {
  readonly tag: Array<string>;
}

