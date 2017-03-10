var bubbleSort = function(arr) {
  var length = arr.length;
  for (var i = 1; i <= length -1; i++) {
    for (var j = 0; j <= length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var arr = [3, 1, 2, 4, 5 ,6 ,7,  8];
console.log(bubbleSort(arr));

var selectSort = function(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++)   {
    for (var j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i]  = arr[j];
        arr[j]  = temp;
      }
    }
  }
  return arr;
}

var arr = [3, 1, 2, 4, 5, 6 ,7,  8];
console.log(selectSort(arr));

var qsort = function(arr) {
  if (arr.length <= 1) return arr;
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr[pivotIndex];
  arr.splice(pivotIndex, 1);
  var left = [];
  var right = [];
  for (var i = 0, length = arr.length; i < length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return qsort(left).concat([pivot], qsort(right));
}


var arr = [3, 1, 2, 4, 5 ,6 ,7,  8];
console.log(qsort(arr));

var insertSort = function(arr) {
  for (var i = 0, length = arr.length;  i < length; i++) {
    var currentIndex = i;
    while (currentIndex > 0 && arr[currentIndex] < arr[currentIndex - 1]) {
      var temp = arr[currentIndex];
      arr[currentIndex] = arr[currentIndex - 1];
      arr[currentIndex - 1] = temp;
      currentIndex--;
    }
  }
  return arr;
}


var arr = [3, 1, 2, 4, 5 ,6 ,7,  8];
console.log(insertSort(arr));

var mergeSort = function(arr) {
   if (arr.length <= 1) return arr;
  var middle = Math.floor(arr.length / 2);
  //middle 往右偏,所以后面包括middle 不然两个的时候出错
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);
  var result =  merge(mergeSort(left), mergeSort(right));
  return result;
}

var merge = function(left, right) {
  var result = [];
  while(left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }
  if (left.length > 0) {
    result = result.concat(left);
  } else {
    result = result.concat(right);
  }
  return result;
}



var arr = [3, 1, 2, 4, 5 ,6 ,7,  8];
console.log(mergeSort(arr));

