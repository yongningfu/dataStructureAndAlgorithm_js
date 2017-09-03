// 在一个数组中 选任意三个数进行组合
// 求所有的组合情况

// 简单做法

var arr = [1, 2, 3, 4, 5, 6];

// 一个元素分两种情况，一个是有在组合里面 一个是不在组合里面
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    for (var k = j + 1; k < arr.length; k++) {
      console.log(arr[i], arr[j], arr[k]);
    }
  }
}



