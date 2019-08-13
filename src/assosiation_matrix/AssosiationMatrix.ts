import { DataID, DataType } from "../common/CommonType";

type Pos = {
  readonly x: number;
  readonly y: number;
}

type Check = {
  checkType: string;
  isChecked: boolean;
} & Pos

type PairName = {
  nameX: string;
  nameY: string;
} 

type AssosiationNames = Array<string>;
type AssosiationItems = Array<Array<Check>>;
type AssosiationConditions = Array<Check & PairName>;
type Overview = Readonly<Array<Readonly<Array<Readonly<Check & PairName>>>>>

export class AssosiationMatrix {
  private assosiationItems: AssosiationItems = [];
  private assosiationCondition: AssosiationConditions = [];

  constructor(
    private assosiationName: AssosiationNames,
    private defaultCheckType: string = "default"
  ) {
      this.initTable(defaultCheckType);
    }

  initTable = (checkType: string) => {
    this.assosiationItems = [];
    this.assosiationCondition = [];

    for (const [xIndex, xName] of this.assosiationName.entries()) {
      const yArray: Array<Check> = [];

      for (const [yIndex, yName] of this.assosiationName.slice(xIndex + 1).reverse().entries()) {
        const check: Check = {
          checkType: checkType,
          isChecked: false,
          x: xIndex,
          y: yIndex 
        } 

        const condition: Check & PairName = Object.assign(
          { 
            nameX: xName,
            nameY: yName 
          },
          check
        )

        yArray.push(check);
        this.assosiationCondition.push(condition);

      }

      this.assosiationItems.push(yArray);
    }
  }

  // TODO Bound check
  addName = (name: string, num?: number) => {
    if (num) {
      this.assosiationName.splice(num, 0, name);
    } else {
      this.assosiationName.push(name);
    }
  }

  removeName = (name: string) => {
    for (const [index, item] of this.assosiationName.entries()) {
      if (name === item) {
        this.assosiationName.splice(index, 1); 
        return 
      }
    }
  }

  overview = () => {
  
  }

}
