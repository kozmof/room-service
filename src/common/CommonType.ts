import { TopicEntity, BuiltInTopic, CustomTopic } from "../topic/Topic";
import { SubjectData, ObjectData, LinkData } from "../medium_arrow/MediumArrow";
import { ClipData } from "../clip/Clip";

export type DataID = string;
export type PersonID = string;

export type Data = SubjectData | ObjectData | LinkData | ClipData | unknown;
export type DataType = "subject" | "object" | "link5x5" | "link7x7";

export type UserAction = "created" | "modified" | "deleted";

export type ModifiedDataType = string;

export interface CoreDataSurface {
  dataID: DataID;
  source: string;
  authorName: string;
  authorID: PersonID;
  editorName: string;
  editorID: PersonID;
  MD5: string;
}

export interface LogDataSurface extends CoreDataSurface {
  userAction: UserAction;
  modifiedData: ModifiedDataType;
  time: Date;
}

export interface CommonDataSurface<T> extends CoreDataSurface {
  builtInTopics: Array<TopicEntity<BuiltInTopic>>
  customTopics: Array<TopicEntity<CustomTopic>>
  history: Array<LogDataSurface>;
  category: Array<string>;
  tag: Array<string>
}

