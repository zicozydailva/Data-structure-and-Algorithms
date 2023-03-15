// ******* If word A is equal word B, even if scattered. -- FREQUENCY COUNTER pattern ********
function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    // if letter exist... increment else set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    //   cannot find letter or equal to zero... Then not anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

const check = isAnagram("rice", "icer"); // true
const check1 = isAnagram("rice", "icee"); // false
console.log(check);
console.log(check1);
