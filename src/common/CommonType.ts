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
  data_id: DataID;
  source: string;
  author_name: string;
  author_id: PersonID;
  editor_name: string;
  editor_id: PersonID;
  MD5: string;
}

export interface LogDataSurface extends CoreDataSurface {
  user_action: UserAction;
  modified_data: ModifiedDataType;
  time: Date;
}

export interface CommonDataSurface<T> extends CoreDataSurface {
  buit_in_topics: Array<TopicEntity<BuiltInTopic>>
  custom_topics: Array<TopicEntity<CustomTopic>>
  history: Array<LogDataSurface>;
  category: Array<string>;
  tag: Array<string>
}

