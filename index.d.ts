// eslint-disable-next-line @typescript-eslint/triple-slash-reference

interface Array {
  myUnshift(...val: unknown[]): number;
  myPush(...val: unknown[]): number;
}
interface String {
  myPadStart(length: number, char: string): string;
  myTrim(): string;
  myIndexOf(str: string, searchPosition: number = 0): number;
}
interface Object {
  myIs(x: unknown, y: unknown): boolean;
}
