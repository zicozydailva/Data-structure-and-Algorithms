function diagonalDifference(arr) {
  // Write your code here
  let leftDiagSum = 0;
  let rightDiagSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftDiagSum += arr[i][i];
    rightDiagSum += arr[i][arr[i].length - (i + 1)];
  }
  let sum = Math.abs(leftDiagSum - rightDiagSum);
  return sum;
}

function diagonalDiff(arr) {
  let leftDiagSum = 0;
  let rightDiagSum = 0;
  for (i = 0; i < arr.length; i++) {
    leftDiagSum += arr[i][i];
    rightDiagSum += arr[i][arr[i].length - (i + 1)];
  }
  let sum = Math.abs(leftDiagSum - rightDiagSum);
  return sum
}
