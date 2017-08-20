/**
写一个数组乱序算法
 */


 function swap(array, index1, index2) {
   var temp = array[index1];
   array[index1] = array[index2];
   array[index2] = temp;
 }

 // 每次对下角标生成一个随机数，将这个数置后
 var getRandomArray = function(array) {
   var len = array.length;
   var ret = array.slice();
   while (len) {
     var randomIndex = Math.floor(Math.random() * len);
     // 每次将生成的数置后
     swap(ret, randomIndex, len - 1);
     len--;
   }
   return ret;
 }


 console.log(getRandomArray([1, 2, 3, 4, 5, 6]))
 console.log(getRandomArray([1, 2, 3, 4, 5, 6]))
 console.log(getRandomArray([5, 5, 1, 2, 2, 6]))


 // 简单方法
 var getRandomArray = function(array) {
  var ret = array.slice();
  
  // 大于0交换位置
	return ret.sort(function(ele1, ele2) {
    // 如果前面大于后面，交换位置
    // return ele1 - ele2;

    return 0.5 - Math.random();
	});
}

console.log(getRandomArray([1, 2, 3, 4, 5, 6]))
console.log(getRandomArray([1, 2, 3, 4, 5, 6]))
console.log(getRandomArray([5, 5, 1, 2, 2, 6]))