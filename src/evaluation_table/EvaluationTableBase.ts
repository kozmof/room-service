type table_type = "5x5" | "7x7";

export interface Detail {
  sourceDetail: Array < string >;
  infoDetail: Array < string >;
}

export interface Mat<T, U> {
  detailSource(sourceRank: T): Array < string >;
  detailInfo(infoRank: U): Array < string >;
  detail(): Detail;
} 
