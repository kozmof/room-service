import { DataID } from "../common/CommonType";

type FilingDataType = "entity" | "branch";

class EntityData {
  data_type: FilingDataType = "entity";

  constructor(
    private entity_id: DataID
  ) {}
}

class BranchData {
  data_type: FilingDataType = "branch";

  constructor(
    private branch_id: DataID,
    private entity_array: Array<EntityData>,
    private branch_array: Array<BranchData>
  ) {}
}


