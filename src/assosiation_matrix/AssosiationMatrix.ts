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

    for (const [x_index, x_name] of this.assosiationName.entries()) {
      const y_array: Array<Check> = [];

      for (const [y_index, y_name] of this.assosiationName.slice(x_index + 1).reverse().entries()) {
        const check: Check = {
          checkType: checkType,
          isChecked: false,
          x: x_index,
          y: y_index
        } 

        const condition: Check & PairName = Object.assign(
          { 
            nameX: x_name,
            nameY: y_name
          },
          check
        )

        y_array.push(check);
        this.assosiationCondition.push(condition);

      }

      this.assosiationItems.push(y_array);
    }
  }

  // TODO Bound check
  addName = (name:string, num? :number) => {
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
