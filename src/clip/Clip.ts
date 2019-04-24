import { DataID } from "../common/CommonType"
import { Marker } from "../editor/marker/Marker"

// Block level clipping 
export class ClipData {
  constructor (
    private clipID: DataID,
    private clipData: string,
    private markerData?: Marker
  ) {}
}
