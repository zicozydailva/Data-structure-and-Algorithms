function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

console.log(power(2,3)) // >> 8
console.log(power(2,2)) // >> 4