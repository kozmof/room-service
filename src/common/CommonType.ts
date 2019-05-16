// TODO
export type Data = any;
export type DataID = string;
export type PersonID = string;

export type SpecificDataType = "people" | "place" | "text" | "photo" | "voice" | "event" | "incident" | "account" | "map" | "product" | "organization" | "history" | "auto" | "program" 
export type GeneralDataType = "file";

export type PatternDataType = "clip" | "topic" | "link";

export type DataType = SpecificDataType | GeneralDataType | PatternDataType;

export type UserAction = "created" | "modified" | "deleted";
