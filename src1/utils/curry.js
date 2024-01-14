// function curry() {}

fetch(
  "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/icons_16930_5.7e63c8de1e84c434c095347e9d0d2fd4.js",
).then((res) => {
  res.text().then((res) => {
    console.log("res: ", res);
  });
});


import { IDefaultRetryParams, IRetryParams } from "./types";
import { sleep } from "./utils";

export async function retry(params: IRetryParams): Promise<any> {

    const defaultParams: IDefaultRetryParams = {
        tryCounter: 3,
        delayBetweenRetryMs: 1000,
        factor: 2,
    };

    params = {
        ...defaultParams, 
        ...params
    };

    return new Promise(async (resolve: any, reject: any) => {

        let result;

        while (params.tryCounter > 0) {
            try {
                result = await params.func();
                return resolve(result);

            } catch (e) {
                if (params.tryCounter == 1) {
                    reject(e);
                    return;
                }

                if (typeof params.onError === 'function') {
                    const onErrorResult: boolean = await params.onError(e);

                    if (!onErrorResult) {
                        reject(e);
                        return;
                    }
                }

                await sleep(params.delayBetweenRetryMs);
                params.tryCounter--;
            }
        }
    });

}