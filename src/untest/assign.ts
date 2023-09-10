Object.myAssign<T,U>(target:T,source:U):T&U{
    for (const key in source) {
        if (Object.hasOwn(source,key)) {
           target[key] = source[key]         
        }
    }
    return target
}