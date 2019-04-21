type table_type = "5x5" | "7x7";

export interface Detail {
  source_detail: Array < string >;
  info_detail: Array < string >;
}

export interface Mat<T, U> {
  detailSource(source_rank: T): Array < string >;
  detailInfo(info_rank: U): Array < string >;
  detail(): Detail;
} 
