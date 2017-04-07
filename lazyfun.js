/*
### 函数的懒加载
本质就是js变量名的重新赋值
 一般用于一些单次条件判断，比如浏览器兼容性等，和立即执行函数差不多，不过的话， 只是用到的时候再去执行，而立即函数是马上执行

针对不同浏览器的添加监听事件不同，所以定义监听事件的时候要进行兼容性判断，
但是这种兼容性判断，一般执行一次即可
一般不用立即执行，因为在浏览器中，js的执行会阻塞dom树的构建，延迟渲染

### 一般编写的思路为
-  声明一个懒加载函数
-  进行条件判断， 不同情况，就重新对懒加载的函数名重新赋值(函数参数要一致)
- 末尾要执行一些重新定义了的懒加载函数，即第一次执行
- 后面的话，由于已经对懒加载函数进行了重定义，所以一直使用的是 重定义后的值

*/


var addEvent = function(elem, type, handler) {
  if (window.addEventListener) {
    addEvent = function(elem, type, handler) {  //对addEvent的重新赋值
      window.addEventListener(type, handler, false);
    }
  } else if (window.attachEvent) {
    addEvent = function(elem, type, handler) { //也是重新定义
      elem.attachEvent('on' + type, handler);
    }
  }

  addEvent(elem, type, handler); //第一次调用的时候，由于经过了addEvent的重定义，所以这里要执行
}
