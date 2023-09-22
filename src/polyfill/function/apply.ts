type F = (...args: any[]) => any

function myApply(fn: F, thisArg: unknown, args: unknown[]) {
    var uniqueId = Symbol();
    thisArg = thisArg || globalThis 
    while (Object.hasOwn(thisArg as object, uniqueId)) {
        uniqueId = Symbol();
    }
    // const arr = []
    // for (let i = 0; i <  args.length; i++) {
    //     arr.push("arguments[2][" + i + "]");
    // }
    const arr = args.map((item,index)=>'args['+index+']');
    (thisArg as Record<symbol,unknown>)[uniqueId] = fn;
    const res = eval('thisArg[uniqueId](' + arr + ')');
    Reflect.deleteProperty(thisArg as object, uniqueId);
    return res;
}


export { }