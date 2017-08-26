/**
 * 如何获取一个区间最大和
 * 
 * 区间和 即区间里面的所有元素相加， 而且区间为连续的子集
 * [xi, xi2, xi3..]    xi1 + xi2 + xi3
 * 
 * 利用动态规划的思想，以 i 位结尾的区间(说明i一定在区间中)的最大和 一定是 
 * (以 i - 1结尾区间的最大值 或者是 0) + arr[i]
 * ps: 如果 i - 1 结尾区间最大值为 小于零，那么我们就取0, 即不要之前的区间
 * 
 */
function getRangeMax(arr) {
  // 记录以为 index i 为结尾的区间的最大值
  var maxn = [arr[0]];
  var ret = 0;
  for (var i = 1; i < arr.length; i++) {
    // 必须和零比较 如果之前区间最大和小于0，则不要这分部最大和
    maxn[i] = Math.max(0, maxn[i - 1]) + arr[i];
    ret = Math.max(maxn[i], ret);
  }
  return ret;
}

var arr = [9, 1, -5, 17, 18, -10, 1];

console.log(getRangeMax(arr));
