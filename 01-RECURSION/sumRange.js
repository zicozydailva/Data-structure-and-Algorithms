// iterative version
const summation = (num) => {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

console.log(summation(5));

//recursive version ... NOTE: recursive functions must have a base case to avoid pitfalls
function sumRange(num) {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1);
}

console.log(sumRange(4));
