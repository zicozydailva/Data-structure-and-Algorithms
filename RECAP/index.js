function countdown(num) {
  if (num <= 1) return;
  console.log(num);
  num--;
  countdown(num);
}
// countdown(15);

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1; // base case
  return num * factorial(num - 1);
}
// console.log(factorial(3)); // >> 6

function iterFactorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// console.log(iterFactorial(3)); // >> 6

// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(12));

function power(base, exponent) {
  return base * power(base, exponent - 1);
}
