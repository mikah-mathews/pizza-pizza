function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function(order) {
  if (order === "small") {
    console.log("10");
    return 10;
  } else if (order === "medium") {
    console.log("12")
    return 12;
  } else if (order === "large") {
    console.log("15")
    return 15;
  }
}

let newPizza = new Pizza(["pepperoni", "pineapple"], "small");
let size = newPizza
console.log(newPizza);
console.log(newPizza.price("small"));