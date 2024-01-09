// q: https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md

type Space = " " | "\n";
type LeftType<T> = T extends `${Space}${infer B}` ? LeftType<B> : T;

type C = LeftType<`
    waefa weafwa`>;
