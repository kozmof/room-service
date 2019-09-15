type ComponentType = "table";
type ModifyType = "erase" | "insert" | "update" | "no-change";

type Order = {
  start: number;
  boundEnd: number;
}

type componentOrder = {
  componentType: ComponentType; 
  order: Order;
}

type SearchResult = {
  index: number;
  componentType: ComponentType;
}

type ComponentInfo = Array<componentOrder>;

const modifyType = (linePos: number, lines: Array<string>, prevLines: Array<string>): ModifyType => {
  if (lines[linePos] === prevLines[linePos] && lines.length == prevLines.length) {
    return "no-change";
  } else if (prevLines.length < lines.length) {
    return "insert";
  } else if (lines.length > lines.length) {
    return "erase";
  } else {
    return "update";
  }
}

const diffSearch = (modifyType: ModifyType, linePos: number, prevLinePos: number, lines: Array<string>, prevLines: Array<string>): Array<string> => {
  if (modifyType === "no-change") {
    return []
  } else if (modifyType === "insert") {
    const changed_num: number = lines.length - prevLines.length;
    let search_count: number = 0;
    let searched_pos: Array<number> = []
    let head_hit: boolean = false;
    let tail_hit: boolean = false;
    let up: boolean = false;
    for (let pos = prevLinePos; search_count < lines.length; search_count++) {
      if (pos !== 0 || pos !== lines.length - 1) {
        let e: number = ((-1) ** (search_count + 1)); // e == 1 || -1
        if (e >= 0) {
          up = false;
        } else {
          up = true;
        };
        pos = search_count * e;
        searched_pos.push(pos); // 1
        if (pos === 0) {
          head_hit = true;
        } else if (pos == lines.length - 1) {
          tail_hit = true;
        }
      } else {
        if (head_hit) {
          up = false;
          pos = (-1) * pos + 1;
          searched_pos.push(pos); // 2
          for (let rest_pos = pos + 1; pos < lines.length; rest_pos++) {
            searched_pos.push(pos); // 3
          }
          break;
        } else if (tail_hit) {
          up = true;
          pos = (-1) * pos - 1;
          searched_pos.push(pos); // 4
          for (let rest_pos = pos - 1; 0 <= pos; rest_pos--) {
            searched_pos.push(pos); // 5
          }
          break;
        }
      }
  }

  } else if (modifyType === "erase") {

  } else if (modifyType === "update") {

  }
}

const componentSearch = (linePos: number, componentInfo: ComponentInfo) : SearchResult => {
  if (componentInfo.length <= linePos) {
    for (let i = componentInfo.length - 1; 0 <= i; i--) {
      if (componentInfo[i].order.start <= linePos && linePos < componentInfo[i].order.boundEnd) {

        const result: SearchResult = {
          index: i,
          componentType: componentInfo[i].componentType
        };
        return result;
      }
    }
  } else if (linePos === componentInfo[linePos].order.start) {
    const result: SearchResult = {
      index: linePos,
      componentType: componentInfo[linePos].componentType
    };
    return result;
  } else if (linePos < componentInfo[linePos].order.start) {
    // back search
    for (let i = linePos; 0 <= i; i--) {
      if (componentInfo[i].order.start <= linePos && linePos < componentInfo[i].order.boundEnd) {
        const result: SearchResult = {
          index: i,
          componentType: componentInfo[i].componentType
        };
        return result;
      }
    }
  } else if (componentInfo[linePos].order.start < linePos) {
    //forward search
    for (let i = linePos; i < componentInfo.length; i++) {
      if (componentInfo[i].order.start <= linePos && linePos < componentInfo[i].order.boundEnd) {
        const result: SearchResult = {
          index: i,
          componentType: componentInfo[i].componentType
        };
        return result;
      }
    }
  }
}

export const diffComponent = (text: string, prevText: string, linePos: number, componentInfo: ComponentInfo) => {
  const lines = text.split("\n");
  const prevLines = prevText.split("\n");

  if (lines[linePos] !== prevLines[linePos]) {
    const searchResult: SearchResult = componentSearch(linePos, componentInfo);
    const m: ModifyType = modifyType(linePos, lines, prevLines);

    const res: SearchResult & {modifyType: ModifyType} = {
      ...searchResult,
      modifyType: m
    }
    return res
  } 
}