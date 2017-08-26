/**
 * 如何找到第K大的数
 * 利用快排的思想， 我们知道快排每次都会选一个 值，然后把大于这个值的放在左边，小于这个值的
 * 放在右边，也就是说没执行一个过程后，这个值在数组中的下角标就能确定，假设为index, 那么
 * 这个值就是 第 (array.length - index） 大
 * 
 * pivotK = array.length = index;
 * 
 * 然后把pivotK 和 我们想要的 k 进行比较, 如何k < pivotK 那么在后半段找
 * 
 */

 function swap(array, index1, index2) {
   var t = array[index1];
   array[index1] = array[index2];
   array[index2] = t;
 }

 // 不包括end
function findKMax(array, start, end, k) {
  if (start >= end) return;
  var left = start;
  var right = end - 1;
  var pivot = array[left];
  while (left < right) {
    while (left < right && array[right] > pivot) right--;
    while (left < right && array[left] <= pivot) left++;
    swap(array, left, right);
  }

  // 将 pivot换到 left 和 right重合位置
  swap(array, start, left);

  var tempK = array.length - left;
  if (tempK === k) {
    console.log(pivot);
  } else if (tempK > k) {
    // 往后面找
    findKMax(array, right + 1, end, k);
  } else {
    findKMax(array, start, left, k);
  }
}


var arr = [1, 4, 2, 3, 5, 6, 7, 8, 1];
findKMax(arr, 0, arr.length, 1);
findKMax(arr, 0, arr.length, 2);
findKMax(arr, 0, arr.length, 3);
findKMax(arr, 0, arr.length, 4);
findKMax(arr, 0, arr.length, 5);
findKMax(arr, 0, arr.length, 6);
findKMax(arr, 0, arr.length, 7);
findKMax(arr, 0, arr.length, 8);













