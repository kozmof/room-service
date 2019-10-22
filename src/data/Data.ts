import { PersonID, DataID, DataType } from '../common/CommonType';

export type Data<T extends DataType> = {
  readonly id: DataID;
  readonly content: T;
  readonly sha256: string; // Hash of Content and Holders
} & HolderData

export type Assembly = {
  readonly id: DataID;
  readonly data: Map<DataID, Data<DataType>>;
} & Editor

type Person = {
  name: string;
  id: PersonID;
}

type Author = Person;
type Editor = Person;

type HolderData = {
  readonly authors: Map<PersonID, Author>;
  readonly editors: Map<PersonID, Editor>;
}