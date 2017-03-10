
/*
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper

以此类推。
*/

/**
 * 难点 如何实现同步完成后 ----> 任务自动执行(思想：内置一个run函数 一开始的时候把run放入异步队列)
 * 任务实现了一个再一个 next控制
 */

/**
 * 注意: 函数里面变量的查找时在从函数定义的地方查找，即函数A 它的作用域的上
 * 一级是函数A定义的地方 而不是调用的地方
 */


//LAZYMAN应该返回一个对象 
function LazyMan(name) {
  return new _LazyMan(name);
}

function _LazyMan(name) {
  var that = this;
  that.name = name;
  that.tasks = [];
  that.tasks[0] = function() {
    console.log(name);
    that.next();
  }

  //关键:----先加入异步队列----会自动在同步执行完后 自动调用
  setTimeout(function() {
    that.run();  
  }, 0);

}

_LazyMan.prototype.run = function() {
  this.next();
}

_LazyMan.prototype.next =function() {
  var task = this.tasks[0];
  if (task) {
    this.tasks.splice(0, 1); //必须先删除
    task();
  }
}

_LazyMan.prototype.eat = function(food) {
  var that = this;
  that.tasks.push(function() {
    console.log(food);
    that.next();
  });
  return that;
}

_LazyMan.prototype.sleep = function(time) {
  var that = this;
  that.tasks.push(function() {
    setTimeout(function() {
      console.log('wake up' + time);
      that.next();
    }, time);
  });
  return that;
}

_LazyMan.prototype.sleepfirst = function(time) {
  var that = this;
  that.tasks.unshift(function() {
    setTimeout(function() {
      console.log('first waitting' + time);
      that.next();
    }, time);
  });
  return that;
}

LazyMan("Joe").sleepfirst(3000).eat("breakfast").sleep(1000).eat("dinner");
console.log('aaaaaaaaaaaaaaaaaaaaaaa');
