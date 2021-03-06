import { DataID } from '../common/CommonType';

export type Topic = "memo";
export type NumberTopic = "money";
export type URLTopic = "link";
export type TimeTopic = "published" | "date";

export type UserTopic = "user_topic";
export type UserNumberTopic = "user_number_topic";
export type UserURLTopic = "user_url_topic";
export type UserTimeTopic = "user_time_topic";

export type BuiltInTopic = Topic | NumberTopic | URLTopic | TimeTopic;
export type CustomTopic = UserTopic | UserNumberTopic| UserURLTopic | UserTimeTopic;

export type TopicEntityType<T> = 
  T extends Topic ? string :
  T extends NumberTopic ? number :
  T extends URLTopic ? URL :
  T extends TimeTopic ? Date : 
  T extends UserTopic ? string : 
  T extends UserNumberTopic ? number : 
  T extends UserURLTopic ? URL : 
  T extends UserTimeTopic ? Date :
  never;

export type TopicEntity<T> =
  T extends BuiltInTopic ? BuiltInTopicEntity<T> :
  T extends CustomTopic ? CustomTopicEntity<T> :
  never;

export type BuiltInTopicEntity<T extends BuiltInTopic> = {
  readonly topic: T;
  readonly topicTypeID: DataID;
  readonly topicID: DataID;
  readonly targetID: DataID;
  readonly entity: Array<TopicEntityType<T>>;
}

export type CustomTopicEntity<T extends CustomTopic> = {
  readonly topic: T;
  readonly topicTypeID: DataID;
  readonly topicID: DataID;
  readonly targetID: DataID;
  readonly customDetail: string;
  readonly entity: Array<TopicEntityType<T>>;
}
