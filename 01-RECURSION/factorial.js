// iteratively
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorial(3)); // >> 6
console.log(factorial(4)); // >> 24

// recursively
function factorialRe(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1; // base case
  return num * factorial(num - 1);
}

console.log(factorialRe(3)); // >> 6
console.log(factorialRe(4)); // >> 24
console.log(factorialRe(5)); // >> 120
