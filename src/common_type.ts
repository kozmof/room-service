import { SubjectData, ObjectData, LinkData } from "./medium_arrow/medium_arrow"

export type DataID = string;
export type UserID = string;
export type Data = SubjectData | ObjectData | LinkData | unknown;
export type DataType = "subject" | "object" | "link5x5" | "link7x7";
export type UserAction = "created" | "modified" | "deleted";
export type ModifiedDataType = string;

export interface Time {
  readonly created;
  readonly updated;
  readonly deleted;
}

export interface CoreDataSurface {
  data_id: DataID;
  source: string;
  MD5: string;
  author_name: string;
  author_id: UserID;
  editor_name: string;
  editor_id: UserID;
}

export interface LogDataSurface extends CoreDataSurface {
  user_action: DataType;
  modified_data: ModifiedDataType;
  time: Date;
}

export interface CommonDataSurface extends CoreDataSurface {
  memo: string;
  category: Array<string>;
  change_log: Array<LogDataSurface>;
  tag: Array<string>
}

