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
} & Pos

type AssosiationInfo = Array<string>;
type AssosiationItems = Array<Array<Check>>;
type Overview = Readonly<Array<Readonly<Array<Readonly<Check & PairName>>>>>

export class AssosiationMatrix {
  private assosiationItems: AssosiationItems = [];

  constructor(
    private assosiationInfo: AssosiationInfo,
    checkType: string = "default"
  ) {
    for (const [x_index, x_item] of assosiationInfo.entries()) {
      const y_array: Array<Check> = []

      for (const [y_index, y_item] of assosiationInfo.slice(x_index + 1).reverse().entries()) {
        const check: Check = {
          checkType: checkType,
          isChecked: false,
          x: x_index,
          y: y_index
        } 

        y_array.push(check);
      }

      this.assosiationItems.push(y_array)
    }
  }

  addItem = (item :string, num? :number) => {
  
  }

  removeItem =  (item: string) => {
  
  }

  overview = () => {
  
  }

}
