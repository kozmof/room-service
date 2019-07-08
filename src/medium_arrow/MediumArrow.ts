import { ActionType, Action } from "../action/Action"
import { DataID, DataType } from "../common/CommonType"
import { Data } from "../data/Data"

// Ex: A => B (A phoned B)

class MediumAction implements Action {
  readonly actionType : ActionType = "predicator";
  constructor(
    private verb: string  
  ) {}
}

class MediumArrow {
  constructor(
    public readonly id: DataID,
    public readonly mediumAction: MediumAction,
    private srcX: number,
    private srcY: number,
    private dstX: number,
    private dstY: number
  ) {}
}

type LinkSurface = {
  readonly subjectData: Data;
  readonly objectData: Data;
  readonly arrowData: MediumArrow;
}

class Link implements Data, LinkSurface {
  dataType: DataType = "link";

  constructor (
    public readonly id: DataID,
    public readonly subjectData: Data,
    public readonly objectData: Data,
    public readonly arrowData: MediumArrow, 
    public readonly MD5: string
  ) {}
}

