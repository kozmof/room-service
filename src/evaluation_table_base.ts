
export interface Detail {
    source_detail: Array < string >;
    info_detail: Array < string >;
}

export interface Mat<T, U> {
    source_rank: T;
    info_rank: U;
    detail_source(source_rank: T): Array < string >;
    detail_info(info_rank: U): Array < string >;
    detail(): Detail;
} 
