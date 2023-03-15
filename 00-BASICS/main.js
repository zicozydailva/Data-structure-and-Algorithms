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



console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2], [1, 4, 3]));

const anagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];

    // if match.. incremnet else set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {}
  const letter = second[i];

  //   cannot find letter or equal to zero... Then not anagram
  if(!lookup[letter]) {
    return false
  } else {
    lookup[letter] -= 1
  }

  return true;
};
