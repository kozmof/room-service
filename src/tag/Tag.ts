import { ActionType } from "../action/Action"

class TagAction {
  private readonly actionType = "tag";
}

class Tag {
  constructor(
    private tagID: string,
    public name: string,
    ) {}

  private entityIDs: Array<string>;
  private actions: Array<TagAction>;

  and = (tag : Tag) : Array<string> => {
    const result : Array<string> = []
    for (let id1 of this.entityIDs) {
      for (let id2 of tag.entityIDs) {
        if (id1 === id2) {
          result.push(id1);
        } 
      } 
    }
    return Array.from(new Set(result))
  }

  or = (tag : Tag) : Array<string> => {
    const result: Array<string> = [];
    result.concat(this.entityIDs);
    result.concat(tag.entityIDs);
    return Array.from(new Set(result))
  }
}
