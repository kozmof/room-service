import { SubjectData, ObjectData, LinkData } from "./medium_arrow/medium_arrow"

export type DataID = string;
export type PersonID = string;
export type Data = SubjectData | ObjectData | LinkData | unknown;
export type DataType = "subject" | "object" | "link5x5" | "link7x7";
export type UserAction = "created" | "modified" | "deleted";
export type Topic = "memo";
export type TimeTopic = "published" | "date";
export type TopicEntityType = string | number | Date | URL;
export type UserTopic = string;
export type ModifiedDataType = string;

export interface CoreDataSurface {
  data_id: DataID;
  source: string;
  author_name: string;
  author_id: PersonID;
  editor_name: string;
  editor_id: PersonID;
  MD5: string;
}

export interface TopicEntity {
  topic: Topic | TimeTopic | UserTopic;
  entity: TopicEntityType;
}

export interface LogDataSurface extends CoreDataSurface {
  user_action: UserAction;
  modified_data: ModifiedDataType;
  time: Date;
}

export interface CommonDataSurface extends CoreDataSurface {
  topics: Array<Topic>
  history: Array<LogDataSurface>;
  category: Array<string>;
  tag: Array<string>
}

