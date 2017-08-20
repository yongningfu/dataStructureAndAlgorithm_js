// 寻找最大区间

// 一个数组中，任意选择一个区间，找到区间内最小值 乘以 区间所有的数的积的最大值
//　比如 [1, 5, 6, 7, 2] 得到的区间为 [5, 6, 7]

function count(array, minIndex, leftIndex, RightIndex) {
  var ret = 0;
  for (var i = leftIndex; i <= RightIndex; i++) ret += array[minIndex] * array[i];
  return ret;
}

function getMaxRange(array) {
  var len = array.length;

  var max = -99999999;
  var ret = [];

  // 记录区间的左和右
  var leftIndex;
  var rightIndex;
  // 每次遍历条件为 当前值为区间内最小值
  for (var i = 0; i < len; i++) {
    leftIndex = i;
    rightIndex = i;
    while (leftIndex > 0 && array[leftIndex - 1] > array[i]) {
      leftIndex--;
    }
    while (rightIndex < len && array[rightIndex + 1] > array[i]) {
      rightIndex++;
    }

    if (count(array, i, leftIndex, rightIndex) > max) {
      max = count(array, i, leftIndex, rightIndex);
      ret = array.slice(leftIndex, rightIndex + 1);
    }
  }

  return ret;
}

console.log(getMaxRange([1, 5, 6, 7, 2]));


