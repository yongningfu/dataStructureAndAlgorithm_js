var swap = require('../utils.js').swap

function selectSort(array = []) {
	let length = array.length
	for (let i = 0; i < length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[minIndex]) minIndex = j
		}
		if (i !== minIndex) swap(array, minIndex, i)
	}
	return array
}

console.log(selectSort([1, 5, 1,2,7]))



