import { DataID } from "../common/CommonType"
import { Marker } from "../editor/marker/Marker"

// Block level clipping 
export class ClipData {
  constructor (
    private id: DataID,
    private data: string,
    private markerData?: Marker
  ) {}
}
