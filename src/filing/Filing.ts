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
  ) {}

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

  addEntity = (entity: EntityData) => {
    this.entity_array.push(entity)
  }

  removeEntity = (entity_id: DataID) => {
    for (let n = 0; n < this.entity_array.length; n++) {
      if (this.entity_array[n].id() === entity_id) {
        this.entity_array.slice(n, 1); 
        return 
      }
    }
  }

  addBranch = (branch: BranchData) => {
    this.branch_array.push(branch) 
  }

  removeBranch = (branch_id: DataID) => {
    for (let n = 0; n < this.branch_array.length; n++) {
      if(this.branch_array[n].id() === branch_id) {
        this.branch_id.slice(n, 1); 
        return
      } 
    } 
  }
}

