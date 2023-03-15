const fs = require("node:fs");

// TO READ
// - sync
const content = fs.readFileSync("./text.txt", "utf-8");
console.log(content);
// -- async
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// TO WRITE
// --- sync
fs.writeFileSync("./greet.txt", "Hello world");

// -- async
fs.writeFile("./greet.txt", "Hello worlders", (err) => {
  if (err) throw err;
});

fs.writeSync

// to append
fs.writeFile("./greet.txt", "Hello worlderserrr", { flag: "a" }, (err) => {
  if (err) throw err;
});
