type Space = " " | "\n";
type LeftType<T> = T extends `${Space}${infer B}` ? LeftType<B> : T;

type C = LeftType<`
    waefa weafwa`>;
