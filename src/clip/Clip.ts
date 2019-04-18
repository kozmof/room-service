import { Marker } from "../editor/marker/Marker"

// Block level clipping 
export class ClipData {
  constructor(public clip_id: DataID,
              public clip_data: string
              public marker_data: Marker
              ) {}
}
