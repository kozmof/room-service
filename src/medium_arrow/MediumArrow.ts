import { ActionType, Action } from "../action/Action"
import { DataID, DataType } from "../common/CommonType"
import { Data } from "../data/Data"

// Ex: A => B (A phoned B)

class MediumAction implements Action {
  readonly actionType : ActionType = "predicator";
  constructor(
    public verb: string  
  ) {}
}

class MediumArrow {
  constructor(
    public readonly arrowID: DataID,
    public readonly mediumAction: MediumAction,
    private srcX: number,
    private srcY: number,
    private dstX: number,
    private dstY: number
  ) {}
}

interface LinkSurface {
  readonly subjectData: Data;
  readonly objectData: Data;
  readonly arrowData: MediumArrow;
}

class Link implements Data, LinkSurface {
  dataType: DataType = "link";

  constructor (
    public id: DataID,
    public subjectData: Data,
    public objectData: Data,
    public arrowData: MediumArrow, 
    public MD5: string
  ) {}
}

