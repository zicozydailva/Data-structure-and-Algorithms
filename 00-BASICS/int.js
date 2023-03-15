const basicArithOp = (op, num1, num2) => {
  return eval(num1 + op + num2);
};

console.log(basicArithOp("+", 10, 3));

const doubleInt = (num) => {
  return num.map((x) => x * 2);
};

console.log(doubleInt([3, 4]));

const evenOdd = (num) => {
  return num % 2 === 0;
};
console.log(evenOdd(3));

const fizzBuzz = (num) => {
  for (i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(10));

const getCentury = (year) => {
  return Math.ceil(year / 100);
};
console.log(getCentury(1998));

const getVowels = (word) => {
  let count = 0;
  const arr = word.split("");
  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
    }
  }
  return count;
};

console.log(getVowels("wweee"));

const isPalindrome = (str) => {
  let revStr = str.split("").reverse().join("");
  return revStr === str;
};

console.log(isPalindrome("ziz"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));

function longestWord(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  str.forEach(function (str) {
    if (longest < str.length) {
      longest = str.length;
      word = str;
    }
  });
  return word;
}

const long = (str) => {
  let arr = str.split(" ")
  let longest = 0;
  let word = null;
    arr.forEach(data => {
        if(longest < data.length) {
            longest = data.length
            word = data
        }
    })
    return word
};

console.log(longestWord("pride and prejudice"));
console.log(long("prideeeee and prejudice"));


const removeStr = str => {
    return str.slice(1, -1)
}
console.log(removeStr("Jude"));

const repeatStr = (noOfTimes, str) => {
    return str.repeat(noOfTimes)
}
console.log(repeatStr(10,"dad "));

const summation = (num) => {
    let sum = 0
    for(i=1; i<= num; i++) {
        sum += i
    }
    return sum
}
console.log(summation(3));

const sumPositive = arrOfNum => {
    let sum = 0
    for(i=0; i<arrOfNum.length; i++) {
        if(arrOfNum[i] > 0) {
            sum += arrOfNum[i]
        }
    }
    return sum
}

console.log(sumPositive([3,4,5,-3]));