// when a program calls itself
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

// countToTen()

// USING RECURSION
const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
};
// recurToTen(8);

// FIBONACCI SEQUENCE.. the two previous numbers, sums up the next one
// 0,1,1,2,3,5,8,13,21,34, etc

// WITHOUT RECURSION

const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};
// console.log(fibonacci(12));

//  WITH RECURSION
const fib = (num, array = [0, 1]) => {
  if (num < 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
};
console.log(fib(12));

// FIBONACCI position 
const fibPos = (pos) => {
    if(pos < 2) return pos;
    return fibPos(pos - 1) + fibPos(pos -2)
}
console.log(fibPos(8));

// ONE LINE
const fibPosition = pos => pos < 2 ? pos : fibPos(pos-1) + fibPos(pos-2)
// console.log(fibPosition(8));


const fibRecap = (num, array=[0,1]) => {
    if(num < 2) return array;
    const [next, last] = array.slice(-2)
    return fibRecap(num - 1, [...array, next + last])
}

// console.log(fibRecap(34));


const fibPosRecap = (pos) => {
    if(pos < 2) return pos
    return fibPosRecap(pos - 1) + fibPosRecap(pos -2)
}
// console.log(fibPosRecap(8));