Function.prototype.bind = function() {
  var that = this;
  var argsArray = Array.prototype.slice.call(arguments);
  return function() {
    that.apply(argsArray[0], argsArray.slice(1).concat(Array.prototype.slice.call(arguments)));
  }
}

var name = "win";
var obj = {
  name: 'objobj'
}

function f() {
  console.log(this.name);
  console.log(arguments);
}

var f2 = f.bind(obj, 1, 2, 3).bind(null, 4, 5, 6);
f2(7, 8, 9);



