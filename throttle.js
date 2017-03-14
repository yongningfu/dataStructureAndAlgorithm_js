/**
 * 函数节流和函数防抖
 * 
 * 对于一些频繁触发的回调函数，比如窗口调节大小，onscroll的时候，会造成非常多的回调
 * 如何才能进行执行回调发生的次数呢? 函数节流和函数防抖是两种比较好的选择
 */

/**
 * 函数节流的思想非常简单，用一个节流函数，限制目标函数的执行，当触发一个事件的时候
 * 先把这个事件setTimeout延迟执行，如果在周期内又触发了这个事件，先清除之前的定时器，然后
 * 在重新setTimeout
 * 
 */

// js高级程序设计上面的
var throttle = function(fun, context) {
  clearTimeout(fun.id);
  fun.id = setTimeout(function() {
    fun.call(context);
  }, 200);
}

var fun = () => {console.log('normal throttle')};
for (var i = 0; i < 10000; i++) {
  throttle(fun);
}

/**
 * 上面这个方法还是有不少缺点，直接把id绑定在fun上面
 * 造成fun只能在一个函数节流上面使用
 * 每次都需要传递fun context
 */


//NOTE: 如果想函数的多次执行都引用同一个局部变量，那就使用闭包
var throttle = function(fun, context) {
  var timer = null;// 函数节流的局部引用对象
  return function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      fun.call(context);
    }, 200);
  }
}

var testotherThrottle = ()=>{console.log('ohter throttle')};
var funThrottle = throttle(testotherThrottle);
for (var i = 0; i < 1000000; i++) {
  funThrottle();
}


/**
 * 上面的是函数节流，但是还是会有一些问题，比如说，用户scroll非常快的话
 * 而且scroll一直不停，那么上面的节流函数一定要等到用户停止后，延迟200才会触发的
 * 有没有一种更加好的方式，如果用户一直不停，拖动非常快的话，让他自动隔一个时间
 * 触发呢？ 当然是有的，函数防抖
 * 
 */

var testDebounce = () => {};
var debounce = function(fun, context) {
  var timer = null;
  var begin = new Date(); //希望共享的变量
  return function() {
    clearTimeout(timer); //先清除定时器 防止重复执行

    var currentTime = new Date();
    if ((currentTime - begin) >= 200) {
      console.log(begin);
      console.log(currentTime);
      fun.call(context);
      begin = currentTime; //重置begin
    } else {
      timer = setTimeout(function() {
        fun.call(context);
      }, 200);
    }
  }
}


// var testDebounce = ()=>{console.log('debounce')};
// var funDebounce = debounce(testDebounce);
// for (var i = 0; i < 10000000; i++) {
//   funDebounce();
// }



