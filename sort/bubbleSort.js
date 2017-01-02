var swap = require('../utils.js').swap

function bubbleSort(array = []) {
	let length = array.length;
	for (let i = length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) swap(array, j, j + 1)
		}
	}
	return array
}

console.log(bubbleSort([1, 5, 1,2,7]))
