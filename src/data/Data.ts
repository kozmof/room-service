import { EvaluationType, EvaluationTable } from "../evaluation_table/EvaluationTable"
import { PersonID, DataID, DataType, UserAction } from "../common/CommonType"


export interface DataSurface {
  readonly id: DataID;
  readonly dataType: DataType;
  readonly MD5: string;
}

export interface MetaDataEvaluationSurface <E extends EvaluationType> {
  readonly evaluationType: E;
  readonly evaluationTable: EvaluationTable<E>;
}

export interface MetaDataPersonSurface {
  readonly authorName: string;
  readonly authorID: PersonID;
  readonly editorName: string;
  readonly editorID: PersonID;
}

type ModifiedDataType = "text";

export interface MetaDataLogSurface {
  readonly userAction: UserAction;
  readonly modifiedDataType: ModifiedDataType;
  readonly time: Date;
}

// TODO
export interface MetaDataSourceSurface {
  readonly source: Array<string>;
}

// TODO
export interface MetaDataCategorySurface {
  readonly category: Array<string>;
}

// TODO
export interface MetaDataTagSurface {
  readonly tag: Array<string>;
}

