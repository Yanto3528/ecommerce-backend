// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DeepPartial<T> = T extends (args: any[]) => any
  ? T
  : T extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : T extends object
  ? DeepPartialObject<T>
  : T | undefined;

type DeepPartialArray<T> = Array<T>;
type DeepPartialObject<T> = {
  [Key in keyof T]?: DeepPartial<T[Key]>;
};
