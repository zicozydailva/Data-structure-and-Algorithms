function lonelyinteger(int) {
    // Write your code here
   return int.filter(num => int.filter(n => n === num).length === 1)
}
console.log(lonelyinteger([1,2,3,2,1]));


const lone = int => {
    return int.filter(num => int.filter(n => n === num).length === 1)
}

// console.log(lone([1,2,2]));

const Nonlone = int => {
    return int.filter(num => int.filter(n => n === num).length !== 1)
}

// console.log(Nonlone([1,2,2]));