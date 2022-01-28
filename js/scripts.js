function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

let newPizza = new Pizza(["pepperoni", "pineapple"], "small");
console.log(newPizza);