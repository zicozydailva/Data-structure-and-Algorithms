const eventEmiiter = require("node:events");

const emitter = new eventEmiiter();

emitter.on("order-pizza", (size, topping) => {
  console.log(
    `A customer just order Pizza, Size: ${size}, Topping: ${topping}`
  );
});

emitter.on("order-pizza", (size) => {
  if (size == "large") {
    console.log("You just earned a bottle of coke for your order");
  }
});

console.log("First guy to be ran");
emitter.emit("order-pizza", "medium", "mushroom");
