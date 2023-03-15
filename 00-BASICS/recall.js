const basicArith = (op, num1, num2) => {
  return eval(num1 + op + num2);
};

console.log(basicArith("*", 3, 4));
console.log(basicArith("+", 3, 4));
console.log(basicArith("-", 3, 4));
console.log(basicArith("/", 3, 4));

const doubleInteger = (arrOfNum) => {
  let ans = arrOfNum.map((num) => num * 2);
  return ans;
};
// console.log(doubleInteger([2, 4, 6]));

const evenOdd = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

// console.log(evenOdd(30));

const fizzBuzz = (num) => {
  for (let i = 0; i < num; i++) {
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

// console.log(fizzBuzz(100));

const rec = (randNum) => {
  let counter = 1;
  const func = (counter) => {
    if (counter > randNum) return;

    if (counter % 5 === 0 && counter % 3 === 0) console.log("FizzBuzz");
    else if (counter % 3 === 0) {
      console.log("Fizz");
    } else if (counter % 5 === 0) {
      console.log("Buzz");
    } else console.log(counter);

    func(counter + 1);
  };
  func(counter);
};

// rec(100);

const getAverage = (scores) => {
  const avr = scores.length;
  const sum = scores.reduce((a, b) => a + b, 0);
  const ans = sum / avr;
  return Math.floor(ans);
};

// console.log(getAverage([33, 22, 44]));

const getCentury = (year) => {
  return Math.ceil(year / 100);
};

// console.log(getCentury(2022));



const getVowels = (str) => {
  let vowelCount = 0;

  let arr = str.toLowerCase().split("");

  for (i = 0; i < arr.length; i++) {
      switch(arr[i]) {
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
              vowelCount++
              break;
         case "u":
             vowelCount++
             break;

            }
        }
        return vowelCount
};

console.log(getVowels("Champions"));
console.log(getVowels("Aeiou"));
console.log(getVowels("American"));

const isPalindrome = str => {
    let revStr = str.replace(/[^A-Z0-9]/ig, '')
    revStr.split("").reverse().join("")
    return revStr == str 
}

// console.log(isPalindrome("MadaM"));
// console.log(isPalindrome("racecar"));

const repeatStr = (noOfTimes, str) => {
    return str.repeat(noOfTimes)
}

console.log(repeatStr(10, "Working "));

const removeStr = (str) => {
    return str.slice(1, -1)
}

// console.log(removeStr("Working"));

const replaceWord = word => word.replace(/(WUB)/g, " ").trim()
console.log(replaceWord("WUBWEWUBAREWUBCHAMPIONSWUB!!!"))

const factorize = (num) => {
    let sum = 1
    for(i = 1; i <= num; i++) {
        sum *= i
    }
    return sum
}
console.log(factorize(3));

const sumPositives = arr => {
    let sum = 0;
    for(i = 0; i< arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}

console.log(sumPositives([-22, 20, 12]));

const sumSmallestInt = (arr) => {
    let [a, b] = arr.sort((a, b) => a - b, 0)
    return a + b
}
console.log(sumSmallestInt([22,2,3,443]));


const fibonnaci = (num, arr=[0,1]) => {
    if(num < 2) return arr;
    const [nextTLast, last] = arr.slice(-2)
    return fibonnaci(num -1, [...arr, nextTLast + last])
}

console.log(fibonnaci(12));