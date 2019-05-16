import { ActionType, ActionSurface } from "../action/Action"
import { DataID, DataType, Data } from "../common/CommonType"
import { DataSurface } from "../data/Data"

// Ex: A => B (A phoned B)

class MediumAction implements ActionSurface {
  readonly actionType : ActionType = "predicator";
  constructor(
    public verb: string  
  ) {}
}

interface MediumArrow {
  readonly arrowID: DataID;
  readonly mediumAction: MediumAction;
  srcX: number;
  srcY: number;
  dstX: number;
  dstY: number;
}

interface LinkSurface {
  readonly subjectData: Data;
  readonly objectData: Data;
  readonly arrowData: MediumArrow;
}

class Link implements DataSurface, LinkSurface {
  dataType: DataType = "link";

  constructor (
    public id: DataID,
    public subjectData: Data,
    public objectData: Data,
    public arrowData: MediumArrow, 
    public MD5: string
  ) {}
}

