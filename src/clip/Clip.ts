import { DataID } from "../common/CommonType"
import { Marker } from "../editor/marker/Marker"

// Block level clipping 
export class ClipData {
  constructor(private clip_id: DataID,
              private clip_data: string,
              private marker_data?: Marker
              ) {}
}
