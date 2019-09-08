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

const componentSearch = (pos: number, componentInfo: ComponentInfo) : SearchResult => {
  if (componentInfo.length <= pos) {
    for (let i = componentInfo.length - 1; 0 <= i; i--) {
      if (componentInfo[i].order.start <= pos && pos < componentInfo[i].order.bound_end) {

        const result: SearchResult = {
          index: i,
          componentType: componentInfo[i].componentType
        };
        return result;
      }
    }
  } else if (pos === componentInfo[pos].order.start) {
    const result: SearchResult = {
      index: pos,
      componentType: componentInfo[pos].componentType
    };
    return result;
  } else if (pos < componentInfo[pos].order.start) {
    // back search
    for (let i = pos; 0 <= i; i--) {
      if (componentInfo[i].order.start <= pos && pos < componentInfo[i].order.bound_end) {
        const result: SearchResult = {
          index: i,
          componentType: componentInfo[i].componentType
        };
        return result;
      }
    }
  } else if (componentInfo[pos].order.start < pos) {
    //forward search
    for (let i = pos; i < componentInfo.length; i++) {
      if (componentInfo[i].order.start <= pos && pos < componentInfo[i].order.bound_end) {
        const result: SearchResult = {
          index: i,
          componentType: componentInfo[i].componentType
        };
        return result;
      }
    }
  }
}

const diffComponent = (text: string, prev_text: string, pos: number, componentInfo: ComponentInfo) => {
  const lines = text.split("\n");
  const prev_lines = prev_text.split("\n");

  if (lines[pos] !== prev_lines[pos]) {
    const searchResult: SearchResult = componentSearch(pos, componentInfo);
  } 
}