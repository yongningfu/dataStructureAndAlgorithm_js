function swap(array, index1, index2) {
	let temp = array[index1]
	array[index1] = array[index2]
	array[index2] = temp
}

/**
 * 返回指定范围内的整数
 * @param  {[type]} start 范围开始
 * @param  {[type]} end   范围结束（不包括）
 * @return {[type]}       整数
 */
function getRandomWithRange(start, end) {
	return parseInt(Math.random() * (end - start)) + start;
}

module.exports.swap = swap;
module.exports.getRandomWithRange = getRandomWithRange;
