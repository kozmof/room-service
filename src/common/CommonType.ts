// TODO
export type DataID = string;
export type PersonID = string;

export type SpecificDataType = "people" | "place" | "text" |
                               "photo" | "voice" | "event" |
                               "incident" | "account" | "map" |
                               "product" | "organization" | "history"; 

export type GeneralDataType = "file";

export type DataType = SpecificDataType | GeneralDataType;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
