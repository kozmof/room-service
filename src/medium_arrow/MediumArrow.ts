import { ActionType, ActionSurface } from "../action/Action"
import { Data, DataID } from "../common/CommonType"
import { Rank5x5, SourceEvaluation, InfoEvaluation } from "../evaluation_table/EvaluationTable5x5"
import { Rank7x7, SourceReliability, DataValidity } from "../evaluation_table/EvaluationTable7x7"

// Ex: A => B (A phoned B)

class MediumAction implements ActionSurface {
  readonly actionType = "predicator";
}

interface MediumArrow {
  readonly arrowID: DataID;
  readonly mediumAction: string;
  srcX: number;
  srcY: number;
  dstX: number;
  dstY: number;
}

export interface SubjectData {
  readonly subjectID: DataID;
}

interface SubjectData5x5 extends Rank5x5 {
  data: SubjectData;
}

interface SubjectData7x7 extends Rank7x7 {
  data: SubjectData;
}

export interface ObjectData {
  readonly objectID: DataID;
}

interface ObjectData5x5 extends Rank5x5 {
  data: ObjectData;
} 

interface ObjectData7x7 extends Rank7x7 {
  data: ObjectData;
} 

export interface LinkData {
  readonly linkID: DataID;
}

interface LinkData5x5 extends Rank5x5 {
  data: LinkData;
}

interface LinkData7x7 extends Rank7x7 {
  data: LinkData;
}

class Link implements SubjectData, ObjectData, MediumArrow {
  constructor (
    public linkID: DataID, 
    public subjectID: DataID,
    public objectID: DataID,
    public arrowID: DataID, 
    public mediumAction: string, 
    public srcX: number,
    public srcY: number,
    public dstX: number, 
    public dstY: number
  ) {}

  subjectData = (): Data => {
    return    
  }

  objectData = (): Data => {
    return    
  }
}

