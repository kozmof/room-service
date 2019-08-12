import { DataID } from "../common/CommonType"
import { ActionType, Action } from "../action/Action"

class TagAction implements Action {
  readonly actionType: ActionType = "tag";
}

class Tag {
  constructor(
    private tagID: DataID,
    public name: string,
  ) {}

  private entityIDs: Array<DataID>;
  private actions: Array<TagAction>;

  and = (tag : Tag) : Array<DataID> => {
    const result : Array<DataID> = []

    for (const id1 of this.entityIDs) {
      for (id2 of tag.entityIDs) {
        if (id1 === id2) {
          result.push(id1);
        } 
      } 
    }

    return Array.from(new Set(result))
  }

  or = (tag : Tag) : Array<DataID> => {
    const result: Array<DataID> = [];
    result.concat(this.entityIDs);
    result.concat(tag.entityIDs);

    return Array.from(new Set(result))
  }
}
