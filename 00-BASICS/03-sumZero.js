// sum of first number and sum of second num should equal zero... then return true

// Using normal pattern -- no idle... Big 0..time & space complexity
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; i < arr.length; i++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, 2])); // returns undefined
console.log(sumZero([-3, -2, 2, 3])); // returns the first truthy array

// Using multiple pointer pattern...using two pointers
function sumZeroo(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZeroo([-3, 2])); // returns undefined
console.log(sumZeroo([-3, -2, 2, 3])); // returns the first truthy array
