function countingSort(arr) {
    let counterArray = Array(100).fill(0);
    
    for (let number of arr) {
        counterArray[number]++
    }
    return counterArray;
}

console.log(countingSort([2,3,3,9,1]));