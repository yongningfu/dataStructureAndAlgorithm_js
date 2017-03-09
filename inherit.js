//寄生组件继承模式
/**
 * 继承有两种方式  
 * 一种是基于原型链的继承
 * 一种是利用this进行父属性的子绑定
 * 
 * 一般来说，我们把函数放在原型上面，这样的话，没当new的时候，对象的大小就比较小
 * 
 * 寄生组合模式是如何的呢？
 * 1 利用基于原型的继承 去继承父的原型
 * 2 利用this属性绑定的方式，去继承父的属性
 *  
 * 这样的话，由于继承了父的原型 所以能用 instanceof判断是否为父
 * 而且把父的属性和方法都继承得到
 */

function inheritPrototype(Child, Parent) {
  var prototype = Object(Parent.prototype);
  prototype.constructor = Child;
  Child.prototype = prototype;
}

var Animal = function(name) {
  this.name = name;
}

Animal.prototype.intruduce = function() {
  return this.name;
}

var Dog = function(name, type) {
  Animal.call(this, name);  //利用this绑定 进行继承属性
  this.type = type;
}

inheritPrototype(Dog, Animal);

Dog.prototype.say = function() {
  return this.intruduce() + this.type;
}

var dog = new Dog('小狗', 'type');

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);










