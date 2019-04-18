import { DataID } from "../common/CommonType";

type FilingDataType = "entity" | "branch";

interface FilingSurface {
  id: () => DataID;
  dtype: () => FilingDataType; 
}

class EntityData implements FilingSurface {
  private data_type: FilingDataType = "entity";

  constructor(
    private entity_id: DataID
  ) {
  }

  dtype = () : FilingDataType => {
    return this.data_type 
  }

  id = () : DataID => {
    return this.entity_id 
  }
}

class BranchData implements FilingSurface {
  private data_type: FilingDataType = "branch";

  constructor(
    private branch_id: DataID,
    private entity_array: Array<EntityData>,
    private branch_array: Array<BranchData>
  ) {}

  dtype = () : FilingDataType => {
    return this.data_type 
  }

  id = () : DataID => {
    return this.branch_id 
  }

  add_entity = (en: EntityData) => {
    this.entity_array.push(en)
  }

  remove_entity = (entity_id: DataID) => {
    for (let n = 0; n < this.entity_array.length; n++) {
      if (this.entity_array[n].id() === entity_id) {
        this.entity_array.slice(n, 1); 
        return 
      }
    }
  }

  add_branch = (br: BranchData) => {
    this.branch_array.push(br) 
  }

  remove_branch = (branch_id: DataID) => {
    for (let n = 0; n < this.branch_array.length; n++) {
      if(this.branch_array[n].id() === branch_id) {
        this.branch_id.slice(n, 1); 
        return
      } 
    } 
  }

}

