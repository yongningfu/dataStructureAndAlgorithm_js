/***
 * 对原型继承方式的理解
 * 
 * 如果A类继承于B类，即说明A的prototype为B的prototype或者能爱原型链上面找到B的prototype
 * 
 * 上面的规则也就是 instanceof 的规则
 * 
 * 继承方式的比较 (A 继承于 B)
 * 1. A.prototype = B.prototype
 *    这种方式不好, 修改A的prototype同时会修改B的prototype
 * 
 * 2. A.prototype = new B() 
 *    这种方式还可以，但是继承多 new 了一个B实例
 * 
 * 3. 为了解决 2 中必须 new 一个B实例的问题, 我们引入一个继承于B的新函数解决
 *    var Fn = function() {};
 *    Fn.prototype = B.prototype;
 *    A.prototype = new Fn();
 * 
 */


function inherite(superClass, subClass) {
  var Fn = function() {};
  Fn.prototype = superClass.prototype;

  var proto = subClass.prototype = new Fn();
  proto.constructor = subClass;
  proto._super_ = superClass;
}


var Info1 = function(age) {
  this.age = age;
}

Info1.prototype.getInfo = function() {
  console.log(this.age, this.name);
}

var Info2 = function(age, name) {
 this._super_(age); 
 this.name = name;
}


inherite(Info1, Info2);
var info = new Info2(1, 'bob');
info.getInfo();












