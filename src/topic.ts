export type Topic = "memo";
export type NumberTopic = "money";
export type URLTopic = "link";
export type TimeTopic = "published" | "date";
export type BuiltInTopic = Topic | NumberTopic | URLTopic | TimeTopic;

export type UserTopic = string;
export type UserTimeTopic = string;
export type UserNumberTopic = string;
export type UserURLTopic = string;
export type CustomTopic = UserTopic | UserTimeTopic | UserNumberTopic | UserURLTopic;

export type TopicEntityType<T> = T extends Topic ? string :
                                 T extends NumberTopic ? number :
                                 T extends URLTopic ? URL:
                                 T extends TimeTopic ? Date : 
                                 T extends UserTopic ? string : 
                                 T extends UserNumberTopic ? number | URL : 
                                 T extends UserURLTopic ? URL : 
                                 T extends UserTimeTopic ? Date :
                                 never;

export interface TopicEntity<T extends Topic | TimeTopic | UserTopic | UserTimeTopic> {
  topic: T;
  entity: TopicEntityType<T>;
}

