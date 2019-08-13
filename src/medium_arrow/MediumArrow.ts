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

type LinkSurface<T extends DataType, U extends DataType> = {
  readonly subjectData: Data<T>;
  readonly objectData: Data<U>;
  readonly arrowData: MediumArrow;
}

class Link<T extends DataType, U extends DataType> implements LinkSurface<T, U> {
  readonly dataType: DataType = "link";
  constructor (
    public readonly id: DataID,
    public readonly subjectData: Data<T>,
    public readonly objectData: Data<U>,
    public readonly arrowData: MediumArrow, 
    public readonly sha256: string
  ) {}
}

