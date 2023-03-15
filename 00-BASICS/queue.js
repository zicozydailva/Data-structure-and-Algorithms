
// NOTE: All callbacks in nextTick queue are excuted before callback in Promises and timeouts


console.log("Console.log 1...");

setTimeout(() => {console.log('Timeout ...')}, 0)

Promise.resolve().then(() => console.log("Promise resolve console ..."));

console.log("Console.log 2...");

process.nextTick(() => console.log("Process next tick console"));

console.log("Console.log 3...");


