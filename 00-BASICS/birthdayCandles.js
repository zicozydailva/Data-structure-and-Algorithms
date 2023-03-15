function birthdayCakeCandles(candles) {
    // Write your code here
   const max = Math.max(...candles);    
    const result = candles.filter(c => c === max);    
    return result.length;

}

console.log(birthdayCakeCandles([3,4,4,7]));