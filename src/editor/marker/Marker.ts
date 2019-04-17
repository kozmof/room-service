type JudgeCondition = "clean" | "suspect" | "hold";

export class Marker {
  constructor(public anchorKey: string, 
              public start: number, 
              public end: number, 
              public text: string, 
              public condition: JudgeCondition){}
}
