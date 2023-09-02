// eslint-disable-next-line @typescript-eslint/triple-slash-reference

interface Array {
  myUnshift(...val: unknown[]): number;
  myPush(...val: unknown[]): number;
}
interface String {
  myPadStart(length: number, char: string): string;
}
interface Object {
  myIs(x: unknown, y: unknown): boolean;
}
