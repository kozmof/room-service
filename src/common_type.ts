import { SubjectData, ObjectData, LinkData } from "./medium_arrow/medium_arrow"

export type DataID = string;
export type UserID = string;
export type Data = SubjectData | ObjectData | LinkData | unknown;
export type DataType = "subject" | "object" | "link5x5" | "link7x7";

export interface Time {
  readonly created;
  readonly updated;
  readonly deleted;
}
