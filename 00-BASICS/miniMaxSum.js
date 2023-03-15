
const miniMaxSum = (arr) => {
    let sum = arr.reduce((a, b) => a + b)
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    console.log((sum - max) + " " + (sum - min)  );
}

miniMaxSum([2,3,4,5]);