import { DataID } from "../common/CommonType";

export class ClipData {
  constructor(public block_id: DataID,
              public start: number,
              public end: number,
              public text: string
              ) {}
}
