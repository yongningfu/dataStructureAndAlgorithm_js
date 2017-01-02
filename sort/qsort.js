var getRandomWithRange = require('../utils.js').getRandomWithRange;
var swap = require('../utils.js').swap;
/**
 * 快速排序
 * @param  {[type]} array 需要排序的数组
 * @param  {[type]} s     开始坐标
 * @param  {[type]} e     末尾坐标（包括）
 * @return {[type]}       [description]
 */
function qsort(array, s, e) {
  if (s >= e) return;
  let start = s;
  let end = e;
  let index = getRandomWithRange(s, e + 1)
  let point = array[index]
  //index为我们要划分的界限 但是由于index可能位于后面， 所以必须把它和start替换一下
  //把index换到最前面  这样的话 它的位置就一直有保证
  //这样 就保证了第一个值是point

  swap(array, start, index)
  //快速排序挖坑思想  point为第一个坑
  //右边> point  左边 <= point
  while(end > start) {
    //start位置为第一个坑 所以从右边开始拿数填坑
    while(array[end] > point && start < end) end--;
    array[start] = array[end]  //出现不大于的情况，把array填左边坑
    while(array[start] <= point && start < end) start++;
    array[end] = array[start]
  }
  //循环出来的时候 start === end
  array[start] = point;
  qsort(array, s, start - 1);
  qsort(array, start + 1, e)
  return array
}

console.log(qsort([1, 5, 1,2,7], 0, 4))
