function binarySearch(array, target) {
  if (!Array.isArray(array)) return;
  var start = 0,
      end = array.length - 1,
      middle,
      index;
  while (start <= end) {
    index = Math.floor((start + end) / 2);
    middle = array[index];
    if (middle == target) {
      return index;
    } else if (target < middle){
      end = index - 1;
    } else {
      start = index + 1;
    }
  }
  return null;
}

console.log(binarySearch([0, 1, 1, 2, 3, 4,5], 0));