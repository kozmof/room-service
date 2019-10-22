import { EvaluationType } from '../evaluation_chip/table/EvaluationTableBase';
import { EvaluationTable } from '../evaluation_chip/table/EvaluationTable';
import { PersonID, DataID, DataType, UserAction } from '../common/CommonType';

export type Data<T extends DataType> = {
  readonly id: DataID;
  readonly content: T
  readonly sha256: string;
} & HolderData

type Person = {
  name: string,
  id: PersonID
}

type Author = Person;
type Editor = Person;

type HolderData = {
  readonly authors: Array<Author>;
  readonly editors: Array<Editor>;
}