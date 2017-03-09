var qsort = function(arr) {
  if (arr.length <= 1) return arr;
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0, length = arr.length; i < length; i++) {
    if(arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qsort(left).concat([pivot], qsort(right));
}


var binarySearch = function(array, target) {
  if (!Array.isArray(array) || array.length === 0) return -1;
  var start = 0;
  var end = array.length - 1;
  while(start <= end) {
    var middle = Math.floor((start + end) / 2);
    if(target < array[middle]) {
      end = middle - 1;
    } else if (target === array[middle]) {
      return middle;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binarySearch(arr,10);
console.log(result); // 9 返回目标元素的索引值       

Array.prototype.delRepeat = function() {
  var cache = {};
  return this.filter(function(ele) {
    var key = typeof ele + ele;
    if (cache[key]) return false;
    cache[key] = true;
    return true;
  });
}

console.log([1, 1, 2, 2, 1, 3, 4, 5].delRepeat());

String.prototype.trim2 = function() {
  return this.replace(/(^\s*)|(\s*&)/, '');
}

console.log('  fdsf '.trim2());


//bind函数的实现
// Function.prototype.bind = function(target) {
//   var that = this;
//   return function() {
//     that.apply(target, Array.prototype.slice.call(arguments));
//   }
// }

Function.prototype.bind = function() {
  var that = this;
  var argsArray = Array.prototype.slice.call(arguments);
  return function() {
    that.apply(argsArray[0], argsArray.slice(1).concat(Array.prototype.slice.call(arguments)));
  }
}





var tt = function(a, b) {
  console.log(this.name);
  console.log(a);
  console.log(b);
}

obj1 = {
  name: 'aa',
  
}

obj2 = {
  name: 'bb',
}

obj1.tt = tt;
obj1.tt(1, 2);
obj2.tt = tt;
obj2.tt(1, 2);

var bindF = tt.bind(obj1).bind(null, "aaaaaa", "aaaaaa").bind(null, "ttttt");

obj1.tt = bindF;
obj1.tt(1, 2);
obj2.tt = bindF;
obj2.tt(1, 2);



// var qsort = function(arr) {
//   if (arr.length <= 1) return arr;
//   var pivotIndex = Math.floor(arr.length / 2);
//   var pivot = arr.splice(pivotIndex, 1)[0];
//   var left = [];
//   var right = [];
//   for (var i = 0, length = arr.length; i < length; i++) {
//     if(arr[i] <= pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return qsort(left).concat([pivot], qsort(right));
// }

var qsort2 = function(array) {
  if (array.length <= 1) return array;
  var pivotIndex = Math.floor(array.length / 2);
  var pivot = array.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0, length = array.length; i < length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i])
    } else {
      right.push(array[i]);
    }
  }
  return qsort2(left).concat([pivot], qsort2(right));;
}


console.log(qsort2([1, 5, 3, 2, 1, 6, 1]));

var binarySearch2 = function(array, target) {
  var start = 0;
  var end = array.length - 1;
  while (start <= end)  {
    var middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return middle;
    } else if(array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1
    }
  }
  return - 1;
}

console.log(binarySearch2([1, 3, 2, 1, 1, 5], 5));

function clone(obj) {
  //Array or Object default Object
  if (typeof obj !== 'object' || obj === null) return obj;
  var result;
  if (Array.isArray(obj)) result = [];
  else result = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      //循环引用问题 自己等于自己 或者互相引用      
      if (obj === obj[key]) throw 'circular'; 
      result[key] = clone(obj[key])
    }
  }
  return result;
}

console.log(clone({aa: 11, bb: 22}));
console.log(clone([1, 2, 3]));
console.log(clone(1));
var tt1 = {aa: [1, 2, 3, {bb: [1, 2]}]};
var tt2 = clone(tt1);

tt1.aa[3].bb[1] = 100;
console.log(tt1.aa);
console.log(tt2.aa);

















