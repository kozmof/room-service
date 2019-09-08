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
  if (lines[linePos] === prevLines[linePos]) {
    return "no-change";
  } else if (prevLines.length <= linePos) {
    return "insert";
  } else if (lines.length === prevLines.length -1 && lines[lines.length - 1] == prevLines[prevLines.length - 2]) {
    return "erase";
  } else {
    if (lines.length - 1 < linePos && lines[linePos + 1] === prevLines[linePos]) {
      return "insert";
    } else if (prevLines.length - 1 < linePos && lines[linePos] === prevLines[linePos + 1]) {
      return "erase";
    } else {
      return "update";
    }
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

    const res: SearchResult & {modifyType: ModifyType}= {
      ...searchResult,
      modifyType: m
    }
    return res
  } 
}