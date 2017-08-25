/**
 * 
 * 为应付后端数据不稳定的问题，避免在视图中做过多的if data == undefined 之类的判断，
 * 我们需要格式化的取出数据，
 * 需求，写一个格式化函数， 这个函数第一个参数为一个变量，类型不定，后面的参数为不定个数的属性
 * 
 * 比如: formate(obj,, b, c, d) 
 * 1. 理论应该得出 obj.a.b.c.d 
 * 2. 实际上 obj可能不存在 obj.a.b不存在等等
 */


function formate() {
  var args = Array.prototype.slice.call(arguments);
  var obj = args[0];
  var props = args.slice(1);
  for (var i = 0; i < props.length; i++) {
    // 这里必须要判断， 不然的话 obj为null 或者 undefined
    // 那么obj['x']会报错
    // 即[]只能去有分配内存的变量的属性值：：：：注意是 变量
    if (obj) {
      obj = obj[props[i]];
    }
  }
  return obj;
}

var obj = {
  a: {
    b: {
      c:{
        d: 1
      }
    }
  }
}

console.log(formate(obj, 'a', 'b', 'c'));
console.log(formate(obj, 'a', 'b', 'c', 'd', 'e'));
console.log(formate(null, 'a', 'b', 'c'));
console.log(formate(1, 'a', 'b', 'c'));