import { EvaluationType, EvaluationTable } from "../evaluation_table/EvaluationTable"
import { PersonID, DataID, DataType, UserAction } from "../common/CommonType"


export type DataSurface = {
  readonly id: DataID;
  readonly dataType: DataType;
  readonly MD5: string;
}

export type MetaDataEvaluationSurface <E extends EvaluationType> = {
  readonly evaluationType: E;
  readonly evaluationTable: EvaluationTable<E>;
}

export type MetaDataPersonSurface = {
  readonly authorName: string;
  readonly authorID: PersonID;
  readonly editorName: string;
  readonly editorID: PersonID;
}

type ModifiedDataType = "text";

export type MetaDataLogSurface = {
  readonly userAction: UserAction;
  readonly modifiedDataType: ModifiedDataType;
  readonly time: Date;
}

// TODO
export type MetaDataSourceSurface = {
  readonly source: Array<string>;
}

// TODO
export type MetaDataCategorySurface = {
  readonly category: Array<string>;
}

// TODO
export type MetaDataTagSurface = {
  readonly tag: Array<string>;
}

