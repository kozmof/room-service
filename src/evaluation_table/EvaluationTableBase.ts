export type EvaluationType = "3x3" | "5x5" | "7x7";

export type Detail = {
  readonly sourceDetail: Array <string>;
  readonly infoDetail: Array <string>;
}

export interface Mat<T, U> {
  detailSource(sourceRank: T): Array <string>;
  detailInfo(infoRank: U): Array <string>;
  detail(): Detail;
} 
