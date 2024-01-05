/**
 * constructor
 *
 *
 */

function A() {}

// what's  prototype chain
// before js doesn
let a = new A();

// 实例对象具备[[prototype]] 该属性指向 构造函数的 A.prototype

// a.__proto__ === A.prototype




// JS 是动态且没有类型的



// js 的继承都是基于原型链的
原型链是如何实现继承的？
每个对象都有一个私有属性 指向 prototype  原型对象，因此原型链的意义是什么？找原型

对象通过私有属性访问原型，对象的原型也是通过这个私有属性去访问原型
对象原型链的尽头 为 null

// class 也是基于 原型链实现的
// js 对象属性访问时，寻找范围是这个对象以及对象的原型链




// new create instanceof isPlainobject  
// typeof gettype 


// 标准访问微[[Prototype]],[[Prototype]] 名称叫做对象的内部错插槽，someObject.[[Prototype]] 表示 someObject 的原型

不推荐的访问 __proto__
标准访问 Object.getPrototypeOf(someObject) / someObject[[Prototype]]/Object.setPrototypeOf(someObject,proto)


// 引擎对原型链的访问一般都通过链式调用[[Prototype]].[[Prototype][[Prototype]
// 也可翻译为__proto__.__proto__

// 原型链上的方法被调用时， this 值指向的是当前继承的对象，而不是拥有该函数属性的原型对象

// 原型跟构造函数的配合，应用在重复的为不同的对象定义相同的属性时，减少不必要代码的冗余

// 构造函数会自动的为每个构造出的函数进行[[Prototype]]的配置，什么叫做构造函数，只有被 new 调用的函数叫构造函数

可以做这样一个等价 构造函数内部通过 this 赋值的语句构建出一个对象 这个对象等同于 构造函数的prototype也等同于 
someObject的[[Prototype]]

构造函数中
this.key = value 

class 中
class SomeObject{
    constructor(value){
        this.value = value
    }
    getValue(){
        return this.value
    }
}
这些this 跟 class 内部的方法本质上都是建立新的对象，这个对象指向通过构造函数或者类新建对象的原型，这个对象一般通过
构造函数的 prototype 访问即
SomeObject.prototype


构造函数的 prototype 默认拥有一个自用属性： constructor 

因此通过构造函数对对象原型的属性修改是并不推荐重赋值的方法，否则就会出现实例访问 constructor 属性无法追踪到 构造函数的问题
function Box(value) {
    this.value = value;
  }
  Box.prototype.getValue = function () {
    return this.value;
  };
Box.prototype = {
    getValue:1
}
console.log(Box.prototype.constructor);



那么合理的推断 new Map的过程中 Map 内部做了什么，进行方法的绑定
于此对应的是，字面量创建实例，而不是通过构造函数，引擎会隐式设置实例的原型
const object = {a : 1}
console.log(Object.getPrototypeOf(object))

同时开发者在回答一些手撕题是，应该尽量避免 通过 prototype 语法回答一些 实现方法类问题
这并不专业，与此对应的错误实践是 monkey patching 


function Base() {}
function Derived() {}
// 将 `Derived.prototype` 的 `[[Prototype]]`
// 设置为 `Base.prototype`

Object.setPrototypeOf(Derived.prototype, Base.prototype) === class Base {} class Derived extends Base {}



this 是关键字，什么的关键字，函数的，函数内才有 this，this 指向什么，一个对象

this 的运作方式是 运行时绑定
this 严格不严格表现不同
构造函数的this 指向函数的 prototype 

this 值为什么取决于 this的上下文，函数的上下文有三种， 函数 类 全局


函数上下文 对this 的规定是，如果一个函数内有this 谁调用的，this 指向谁，同时 这个函数

this 只存在 函数中，mdn 把 this 比作函数的隐藏参数，因此调用函数作为引用类型，谁调用 this，谁就被传入函数内部


this 就是个参数，不要看 this 在哪，要看 this 被谁调用， 子执行函数，this 没人调用，所以指向 window