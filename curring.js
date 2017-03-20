
//对fn进行柯里化
var curring = function(fn) {
  var args = []; //记录调用过程中的args
  //为了要返回function呢？ 因为要把args fn进行闭包保留
  return function() {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    } else {
      [].push.apply(args, arguments);
      return arguments.callee; //返回当前调用函数
    }
  }
}

var cost = function() {
  var money = 0;
  for (var i = 0; i < arguments.length; i++) {
    money += arguments[i]
  }
  return money;
}

//转为curry
cost1 = curring(cost);
cost1(100);
cost1(200);
cost1(300);
console.log(cost1());

cost2 = curring(cost);
console.log(cost2(100)(200)(300)());

//tips: arguments.callee 是返回当前调用的函数，比如即含有当前arguments的函数

