class Tag {
  constructor(
    public name: string,
    ) {}

  private IDs: Array<string>;

  and = (tag : Tag) : Array<string> => {
    const result : Array<string> = []
    for (let id1 of this.IDs) {
      for (let id2 of tag.IDs) {
        if (id1 === id2) {
          result.push(id1);
        } 
      } 
    }
     
    return result
  }

  or = (tag : Tag) : Array<string> => {
    const result: Array<string> = [];
    result.concat(this.IDs);
    result.concat(tag.IDs);
    return result
  }
}
