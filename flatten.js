// 巧妙的flatten  数据扁平化

/**
 * 只能是单层的 flatten
 * [1, 2, [4, 5], [6]] --> [1, 2, 4, 5, 6]
 * @param {*} array 
 */
function flatten(array)  {
  // 利用concat方法可以连接 数组和数字
  // 利用apply恰好接收的参数是数组
  return [].concat.apply([], array);
}