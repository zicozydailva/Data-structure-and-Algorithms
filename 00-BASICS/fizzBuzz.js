


const fizzBuzz = num => {
    for(i=0; i<=num; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            console.log("Fizz_Buzz")
        } else if(i % 5 === 0) {
            console.log("Fizz")
        } else if(i % 3 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(100))

// RECURSION
const fizzBuzzRec = (randomNum) => {
    let counter = 1;
    const func = (counter) => {
       if (counter > randomNum) return;
 
       if (counter % 5 === 0 && counter  % 3 === 0) console.log('FizzBuzz');
       else if (counter % 5 === 0) console.log('Buzz');
       else if (counter  % 3 === 0) console.log('Fizz');
       else console.log(counter);
 
       func(counter + 1);
    };
    func(counter);
 }
 fizzBuzzRec(100)
