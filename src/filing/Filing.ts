import { DataID } from "../common/CommonType";

const uuid = require("uuid/v4");

type FilingDataType = "entity" | "branch" | "root";

interface RootFilingSurface {
  id: () => DataID;
  dtype: () => FilingDataType;
}

interface NonRootFilingSUrface extends RootFilingSurface {
  parentID: () => DataID;
}

interface EntityFilingSurface extends NonRootFilingSUrface {

}

interface BranchFilingSurface extends NonRootFilingSUrface {

}

class ContentManager {
  constructor(
    private entity_array: Array<EntityData>,
    private branch_array: Array<BranchData>
  ) {}

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
        this.branch_array.slice(n, 1); 
        return
      } 
    } 
  }
}

class RootData extends ContentManager implements RootFilingSurface {
  private data_type: FilingDataType  = "root";

  constructor(
    private entity_id: DataID,
    entity_array: Array<EntityData> = [],
    branch_array: Array<BranchData> = []
  ) {
    super(entity_array, branch_array);
  }

  id = () : DataID => {
    return this.entity_id 
  }

  dtype = () : FilingDataType => {
    return this.data_type 
  }
}

class EntityData implements EntityFilingSurface {
  private data_type: FilingDataType = "entity";

  constructor(
    private entity_id: DataID,
    private parent_id: DataID
  ) {}

  dtype = () : FilingDataType => {
    return this.data_type 
  }

  id = () : DataID => {
    return this.entity_id 
  }

  parentID = () : DataID => {
    return this.parent_id 
  }
}

class BranchData extends ContentManager implements BranchFilingSurface {
  private data_type: FilingDataType = "branch";

  constructor(
    private branch_id: DataID,
    private parent_id: DataID,
    entity_array: Array<EntityData> = [],
    branch_array: Array<BranchData> = []
  ) {
    super(entity_array, branch_array);
  }

  dtype = () : FilingDataType => {
    return this.data_type 
  }

  id = () : DataID => {
    return this.branch_id 
  }

  parentID = () : DataID => {
    return this.parent_id
  }

}

class FilingController {
  genID = () : DataID => {
    return uuid()
  }
}

