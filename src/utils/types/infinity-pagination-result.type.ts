export type InfinityPaginationResultType<T> = Readonly<{
  data: T[];
  hasNextPage: boolean;
}>;
// 데이터 무결성을 보장하기 위해서 Readonly 사용
