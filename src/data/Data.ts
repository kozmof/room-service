import { EvaluationType } from "../evaluation_chip/table/EvaluationTableBase"
import { EvaluationTable } from "../evaluation_chip/table/EvaluationTable"
import { PersonID, DataID, DataType, UserAction } from "../common/CommonType"

export type Data<T extends DataType> = {
  readonly content: T
} & AbstractData<T> & MetaDataPerson & MetaDataLog 

type EmptyData = {}

type AbstractData<T extends DataType> = {
  readonly id: DataID;
  readonly dataType: T;
  readonly sha256: string;
}

type MetaDataEvaluation <T extends EvaluationType> = {
  readonly evaluationType: T;
  readonly evaluationTable: EvaluationTable<T>;
}

type MetaDataPerson = {
  readonly authors: Array<string>;
  readonly authorIDs: Array<PersonID>;
  readonly editors: Array<string>;
  readonly editorIDs: Array<PersonID>;
}

type ModifiedDataType = "text";

type MetaDataLog = {
  readonly userAction: UserAction;
  readonly modifiedDataType: ModifiedDataType;
  readonly time: Date;
}

// TODO
type MetaDataSource = {
  readonly source: Array<string>;
}

// TODO
type MetaDataCategory = {
  readonly category: Array<string>;
}

// TODO
type MetaDataTag = {
  readonly tag: Array<string>;
}

