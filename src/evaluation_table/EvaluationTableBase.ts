export interface Detail {
  readonly sourceDetail: Array <string>;
  readonly infoDetail: Array <string>;
}

export interface Mat<T, U> {
  detailSource(sourceRank: T): Array <string>;
  detailInfo(infoRank: U): Array <string>;
  detail(): Detail;
} 
