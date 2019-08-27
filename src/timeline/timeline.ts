
type dateType = "time" | "edit-time" | "published-time" | "update-time" | "delete-time" | "incident-time";

type TimeData<T extends DateContent> = {
    readonly date: Date;
    readonly content: T;
    readonly dateType: dateType;
}

type DateContent = {
    readonly title?: string;
    readonly detail: string;
}

class TimeLine<T extends DateContent> {
    constructor(
        public timeline: Array<TimeData<T>>
    ) {}

    // Sort, Add, Remove methods
}