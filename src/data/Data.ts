import { EvaluationType } from '../evaluation_chip/table/EvaluationTableBase';
import { EvaluationTable } from '../evaluation_chip/table/EvaluationTable';
import { PersonID, DataID, DataType, UserAction } from '../common/CommonType';

export type Data<T extends DataType> = {
  readonly content: T
} & AbstractData<T> & MetaDataPerson & MetaDataLog 

type AbstractData<T extends DataType> = {
  readonly id: DataID;
  readonly dataType: T;
  readonly sha256: string;
}

type MetaDataEvaluation <T extends EvaluationType> = {
  readonly evaluationType: T;
  readonly evaluationTable: EvaluationTable<T>;
}

type Author = {
  name: string,
  id: PersonID
}

type Editor = {
  name: string,
  id: PersonID
}

type MetaDataPerson = {
  readonly authors: Array<Author>;
  readonly editors: Array<Editor>;
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

