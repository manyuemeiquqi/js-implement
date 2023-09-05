// eslint-disable-next-line @typescript-eslint/triple-slash-reference

interface Array {
  myUnshift(...val: unknown[]): number;
  myPush(...val: unknown[]): number;
  myIncludes(ele: unknown, findIndex: number = 0): boolean;
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
