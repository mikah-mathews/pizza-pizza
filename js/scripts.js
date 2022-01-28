function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  if (this.size === "small") {
    console.log("10");
  } else if (this.size === "medium") {
    console.log("12")
    return 12;
  } else if (this.size === "large") {
    console.log("15")
    return 15;
  }
}

let newPizza = new Pizza(["pepperoni", "pineapple"], "small");
console.log(newPizza);
console.log(newPizza.price);