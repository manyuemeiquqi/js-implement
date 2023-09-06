// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../../../index.d.ts" />

Promise.myAllSettled = function <T>(
  values: T[],
): Promise<Awaited<AllSettleRes>[]> {
  return new Promise((resolve) => {
    const result: Awaited<AllSettleRes>[] = [];
    let count = 0;
    if (values.length === 0) resolve(result);
    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i]).then(
        (res) => {
          result[i] = {
            status: "fulfilled",
            value: res,
          };
          count++;
          if (count === values.length) resolve(result);
        },
        (err) => {
          result[i] = {
            status: "rejected",
            reason: err,
          };
          count++;
          if (count === values.length) resolve(result);
        },
      );
    }
  });
};
