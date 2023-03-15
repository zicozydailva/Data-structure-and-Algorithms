function getTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return [i, j];
      } else {
        return "No matching result...";
      }
    }
  }
}

console.log(getTarget([2, 4, 5, 6, 7], 6));

function isAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    lookup[letter] ? (letter.length += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

const check = isAnagram("rice", "icer"); // true
console.log(check);

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(sumZero([-3, 2])); // returns undefined
console.log(sumZero([-3, -2, 2, 3])); // returns the first truthy array

function countUnqiueValues(arr) {
  if (arr.length == 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUnqiueValues([1, 2, 3, 5, 5]));

function sumZerrro(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log("SUmZerrooo", sumZerrro([-2, 3, 4, 2]));

const getCentury = (year) => {
  return Math.ceil(year / 100);
};

console.log("getCentury", getCentury(1801));

function countVowels(str) {
  let vowelCount = 0;

  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        vowelCount++;
        break;
      case "e":
        vowelCount++;
        break;
      case "i":
        vowelCount++;
        break;
      case "o":
        vowelCount++;
        break;
      case "u":
        vowelCount++;
        break;
    }
  }
  return vowelCount;
}

console.log("countVowels", countVowels("champion"));
console.log("countVowels", countVowels("aeiou"));

const isPalindrome = (str) => {
  const revString = str.split("").reverse().join("");
  return revString == str;
};

console.log("isPalindrome", isPalindrome("madam"));
console.log("isPalindrome", isPalindrome("boss"));

const basicArithmeticOps = (op, num1, num2) => {
  return eval(num1 + op + num2);
};

console.log("basicArithmeticOps", basicArithmeticOps("*", 10, 10));
console.log("basicArithmeticOps", basicArithmeticOps("+", 10, 10));
console.log("basicArithmeticOps", basicArithmeticOps("-", 10, 10));

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && 1 % 5 == 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("FIzzBuzz");
    } else {
      console.log(i);
    }
  }
};

console.log("Fizzbuzz", fizzBuzz(100));

function loneInteger(arrOfInt) {
  return arrOfInt.filter(
    (num) => arrOfInt.filter((int) => int == num).length == 1
  );
}
console.log("LoneInteger", loneInteger([1, 2, 2, 3]));

function longestWord(string) {
  const str = string.split(" ");
  let longest = 0;
  let word = null;

  str.forEach(function (str) {
    if (longest < str.length) {
      longest = str.length;
      word = str;
    }
  });
  return word;
}

console.log(longestWord("pride and prejudice"));

const sumMinMax = (arrOfInt) => {
  let sum = arrOfInt.reduce((a, b) => a + b);
  let max = Math.max(...arrOfInt);
  let min = Math.min(...arrOfInt);
  console.log("SUM-MAX:", sum - max + " " + "SUM-MIN:", sum - min);
};

sumMinMax([2, 3, 4, 5]);

const negateInteger = (num) => {
  if (num < 1) return num;
  return num * -1;
};

// or
const negateInt = (num) => {
  return -Math.abs(num);
};

console.log("negateInteger", negateInteger(2));
console.log("negateInteger", negateInt(2));

//RECURSIOn
const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
};
recurToTen(3);

// FIBONACCI SEQUENCE.. the two previous numbers, sums up the next one
// 0,1,1,2,3,5,8,13,21,34, etc
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);

    num -= 1;
  }
  return array;
};

console.log(fibonacci(12));
