// eslint-disable-next-line @typescript-eslint/triple-slash-reference

type AllSettleRes =
  | {
      status: "fulfilled";
      value: unknown;
    }
  | {
      status: "rejected";
      reason: unknown;
    };
interface Array {
  myUnshift(...val: unknown[]): number;
  myPush(...val: unknown[]): number;
  myIncludes(ele: unknown, findIndex: number = 0): boolean;
  myFill(
    val: unknown,
    start: number = 0,
    end: number = (this as unknown[]).length - 1,
  ): unknown[];
}
interface String {
  myPadStart(length: number, char: string): string;
  myTrim(): string;
  myIndexOf(str: string, searchPosition: number = 0): number;
  myRepeat(count: number): string;
}
interface Object {
  myIs(x: unknown, y: unknown): boolean;
}

interface PromiseConstructor {
  myAll<T>(values: T[]): Promise<Awaited<T>[]>;
  myAllSettled<T>(values: T[]): Promise<Awaited<AllSettleRes>[]>;
  myRace<T>(values: T[]): Promise<Awaited<T>>;
  myAny<T>(values: T[]): Promise<Awaited<AllSettleRes>[]> | Promise<Awaited<T>>;
}
