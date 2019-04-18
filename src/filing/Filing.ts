import { DataID } from "../common/CommonType";

type FilingDataType = "top" | "branch";

class TopData {
  data_type: FilingDataType = "top";
}

class BranchData {
  data_type: FilingDataType = "branch";

  constructor(
    private node_id: DataID,
    private top_array: Array<TopData>,
    private branch_array: Array<BranchData>
  ) {}
}


