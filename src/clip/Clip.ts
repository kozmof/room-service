import { DataID } from '../common/CommonType';
import { Marker } from '../editor/marker/Marker';

// Block level clipping 
export class ClipData {
  constructor (
    id: DataID,
    data: string,
    markerData?: Marker
  ) {}
}
