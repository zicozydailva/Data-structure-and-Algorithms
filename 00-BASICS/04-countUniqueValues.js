//  count unique number from sorted array

// using multiple pointer pattern
function countUnqiueValue(arr) {
  // incase an empty array
  if (arr.length === 0) return 0;

  var i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUnqiueValue([1, 2, 3, 5, 5]));
console.log(countUnqiueValue([]));
