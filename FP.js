/**
 * 函数式编程的一些实践
 */

/**
 * 1. 柯里函数
 * 2. 组合函数
 */

// 柯里化
//1 .柯里函数概念是: 只传递一部分函数去调用它. 让它返回一个函数去处理其他参数
//2. 有点类似于面向对象中的继承封装，后面返回的函数继承了前面的函数传递的参数(对于封装来说
// 它就是继承过来的参数外面是访问不到的)
//3. 
//函数柯里化允许和鼓励你分隔复杂功能变成更小更容易分析的部分。
//这些小的逻辑单元显然是更容易理解和测试的，然后你的应用就会变成干净而整洁的组合，由一些小单元组成的组合。

/**
 * 比如封装一个是否为电子邮件的正则匹配函数
 */

var testRegex = function(regex) {
  return function(string) {
    return  regex.test(string);
  }
}

// 传递部分参数调用函数, 返回一个函数去处理下面的参数
var isEmail = testRegex(/^\w.*\w@\w+\.\w{2,3}(\.\w{2,3})?/);
// 利用前面的正则表达式，去处理不同的字符串
// 继承封装了regex对象数据, 下面使用不同的实例调用
console.log(isEmail('535@qq.com'))
console.log(isEmail('51111@qq.com'))



/**
 * 组合函数---对柯里化的一种典型应用
 * 这个是面向函数编写中一个十分重要的概念
 * 函数执行的数据流式 从右往左执行 即左倾，前一个函数的调用结果作为后一个函数的参数
 * 
 * var d = compose(a, b, c)
 * d(args)  <===> a(b(c(args)))
 */


//最简单的实现方式是
var simpleCompose = function(f, g) { //组合调用函数
  //这个函数是接收初始参数的
  return function(args) {
    return f(g(args))
  }
}

var add10 = function(num) {return num + 10};
var toString = function(num) {return 'string:' + num};
var add10ThenString = simpleCompose(toString, add10);
console.log(add10ThenString(10)); //string:20


//redux实现的组合  本质就是 compose(a, b, c, d)===> a(b(c(d(args))))
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

//对原生的方法进行封装
//比如 'a.b'.split('')-->split('a,b');


















