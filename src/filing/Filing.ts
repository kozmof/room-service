import { DataID } from "../common/CommonType";

const uuid = require("uuid/v4");

type FilingDataType = "entity" | "branch" | "root";

interface RootFilingSurface {
  id: () => DataID;
  dtype: () => FilingDataType;
}

interface NonRootFilingSUrface extends RootFilingSurface {
  pid: () => DataID;
}

interface EntityFilingSurface extends NonRootFilingSUrface {

}

interface BranchFilingSurface extends NonRootFilingSUrface {

}

class ContentManager {
  constructor(
    private entities: Array<EntityData>,
    private branches: Array<BranchData>
  ) {}

  addEntity = (entity: EntityData) => {
    this.entities.push(entity)
  }

  removeEntity = (entityID: DataID) => {
    for (let n = 0; n < this.entities.length; n++) {
      if (this.entities[n].id() === entityID) {
        this.entities.slice(n, 1); 
        return 
      }
    }
  }

  addBranch = (branch: BranchData) => {
    this.branches.push(branch) 
  }

  removeBranch = (branchID: DataID) => {
    for (let n = 0; n < this.branches.length; n++) {
      if(this.branches[n].id() === branchID) {
        this.branches.slice(n, 1); 
        return
      } 
    } 
  }
}

class RootData extends ContentManager implements RootFilingSurface {
  private dataType: FilingDataType = "root";

  constructor(
    private entityID: DataID,
    entities: Array<EntityData>,
    branches: Array<BranchData>
  ) {
    super(entities, branches);
  }

  id = () : DataID => {
    return this.entityID
  }

  dtype = () : FilingDataType => {
    return this.dataType
  }
}

class EntityData implements EntityFilingSurface {
  private dataType: FilingDataType = "entity";

  constructor(
    private entityID: DataID,
    private parentID: DataID
  ) {}

  dtype = () : FilingDataType => {
    return this.dataType
  }

  id = () : DataID => {
    return this.entityID
  }

  pid = () : DataID => {
    return this.parentID
  }
}

class BranchData extends ContentManager implements BranchFilingSurface {
  private dataType: FilingDataType = "branch";

  constructor(
    private branchID: DataID,
    private parentID: DataID,
    entities: Array<EntityData>,
    branches: Array<BranchData>
  ) {
    super(entities, branches);
  }

  dtype = () : FilingDataType => {
    return this.dataType
  }

  id = () : DataID => {
    return this.branchID
  }

  pid = () : DataID => {
    return this.parentID
  }

}

class FilingController {
  genID = () : DataID => {
    return uuid()
  }
}

