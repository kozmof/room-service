import { Component } from "react";

type ComponentType = "table";
type ModifyType = "erase" | "inserd" | "update";

type Order = {
  start: number;
  bound_end: number;
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

const componentSearch = (linePos: number, componentInfo: ComponentInfo) : SearchResult => {
  if (componentInfo.length <= linePos) {
    for (let i = componentInfo.length - 1; 0 <= i; i--) {
      if (componentInfo[i].order.start <= linePos && linePos < componentInfo[i].order.bound_end) {

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
      if (componentInfo[i].order.start <= linePos && linePos < componentInfo[i].order.bound_end) {
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
      if (componentInfo[i].order.start <= linePos && linePos < componentInfo[i].order.bound_end) {
        const result: SearchResult = {
          index: i,
          componentType: componentInfo[i].componentType
        };
        return result;
      }
    }
  }
}

const diffComponent = (text: string, prev_text: string, linePos: number, componentInfo: ComponentInfo) => {
  const lines = text.split("\n");
  const prev_lines = prev_text.split("\n");

  if (lines[linePos] !== prev_lines[linePos]) {
    const searchResult: SearchResult = componentSearch(linePos, componentInfo);
  } 
}