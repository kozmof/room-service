import { ClipData } from "../../clip/Clip";

type JudgeCondition = "clean" | "suspect" | "hold";
type ColorPalette = "#2BDBFE" | "#FE2B2B" | "#778899";

export class Marker {
  constructor(public anchorKey: string, 
              public clip_data: ClipData,
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

