//  recursive version
function countDownRe(num) {
  if (num <= 0) { // base case
    console.log("ALL DONE!!");
    return;
  }
  console.log(num);
  num--;
  countDownRe(num);
}
countDownRe(5)

// iterative version
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("ALL DONE!!");
}

console.log(countDown(5));
