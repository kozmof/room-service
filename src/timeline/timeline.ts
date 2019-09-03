
type dateType = "time" | "edit-time" | "published-time" | "update-time" | "delete-time" | "incident-time";

export type TimeData<T extends TimeContent> = {
  readonly date: Date;
  readonly content: T;
  readonly dateType: dateType;
}

export type TimeContent = {
  readonly title?: string;
  readonly detail: string;
}

export class TimeLine<T extends TimeContent> {
  constructor(
    public data: Array<TimeData<T>>
  ) {}

  // Sort, Add, Remove methods
}