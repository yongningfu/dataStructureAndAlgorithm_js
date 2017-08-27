// 全排列

// 利用动态规划的思想 把问题拆分 
// 先导出递推式子  对 arr 进行全排列 即 (arr[0] + arr[1-arr.length - 1]) * arr.length
// 即 每个问题拆分为 第一个元素确定， 后面的元素全排列 一共有 arr.length种

function allPermutation(arr) {
  // 记录 函数递归栈中  当前选用的元素
  var stack = [];

  function innerAllPermutation(arr) {
    if (arr.length <= 0) {
      console.log(stack);
      return;
    }

    // 选择第一个作为全排列
    for (var i = 0; i < arr.length; i++) {
      stack.push(arr[i]);
      var newArr = arr.slice();
      newArr.splice(i, 1);
      innerAllPermutation(newArr);
      stack.pop();
    }
  }

  innerAllPermutation(arr);
}

allPermutation([1, 3, 5, 7, 8]);

