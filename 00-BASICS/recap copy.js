// recursion
const summation = num => {
    if(num === 1) return 1
    return  num + summation(num -1)
}
console.log(summation(3));

// Basic arithmetic operator(add, sub, multiply, divide)
const basicOps = (ops, num1, num2) => {
     return eval(num1 + ops + num2)
}

console.log(basicOps("*", 23, 22));
console.log(basicOps("+", 23, 22));
console.log(basicOps("-", 23, 22));
console.log(basicOps("/", 23, 22).toFixed(2));


// isPalindrome
const isPal = (str) => {
    revStr = str.split("").reverse().join("")
    return revStr == str
}

console.log(isPal("_madam"));

// fizzBuzz
const fizzBuzz = num => {
    for(i=0; i<= num; i++) {
        if(i % 5 ===0 && i % 3 ===0) {
            console.log("Fizz Buzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0 ) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(20));

// REcursion solution
const fizzBuzzRec = num => {

    let counter = 0;
    const func = (counter) => {
        if(counter > num) return;

        if(counter % 5 === 0 && counter % 3 === 0) {
            console.log("Fizz Buzz");
        } else if(counter % 3 === 0) {
            console.log("Fizz ..");
        } else if (counter % 5 === 0 ) {
            console.log(" ..Buzz");
        } else {
            console.log(counter);
        }
        func(counter + 1)
    }
    func(counter)
}

console.log(fizzBuzzRec(22));

const buzzRec = num => {
    let count = 0
    let fizzRec = counter => {
        if(counter > num) return;
        if(counter % 5 === 0 && counter % 3 === 0) console.log("Fizz Buzz");
        else if(counter % 3 === 0) console.log("Fizz");
        else if(counter % 5 === 0) console.log("Buzz");
        else console.log(counter);
        fizzRec(counter + 1)
    }
    fizzRec(count)
}

console.log(buzzRec(30));