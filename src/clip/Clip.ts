import { DataID } from "../common/CommonType";

// Block level clipping 
export class ClipData {
  constructor(public clip_id: DataID,
              public clip_data: string
              public marker_start: number,
              public marker_end: number,
              public marker_text: string
              ) {}
}
