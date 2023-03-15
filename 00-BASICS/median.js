function median(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

console.log(median([4, 5, 0, 2, 7, 1, 33]));

const medianNum = num => {
    const sorted = num.sort((a, b) => a-b);
    let middle = Math.floor(sorted.length / 2)

    if(sorted.length % 2 === 0) {
        return (sorted[middle -1] + sorted[middle] / 2)
    }
    return sorted[middle]
}

console.log(medianNum([4, 0, 5, 7, 3, 1, 33]));
