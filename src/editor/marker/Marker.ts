type JudgeCondition = "clean" | "suspect" | "hold";
type ColorPalette = "#2BDBFE" | "#FE2B2B" | "#778899";

export class Marker {
  constructor(
              private anchorKey: string, 
              public start: number,
              public end: number,
              public text: string,
              public condition: JudgeCondition
              ) {}

  color = () : ColorPalette => {
    switch(this.condition){
      case "clean": 
        return "#2BDBFE"
      case "suspect":
        return "#FE2B2B"
      case "hold":
        return "#778899"
    }
  }
}

