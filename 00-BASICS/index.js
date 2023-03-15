// ********** array one equal to square of array two - using FREQUENCY COUNTER pattern ********

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

const answer = same([3, 5], [9, 25]);
const answer1 = same([1, 2, 3], [4, 1, 9]);
const answer2 = same([1, 2], [1, 4, 3]);

console.log(answer);
console.log(answer1);
console.log(answer2);
