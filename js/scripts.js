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
console.log(newPizza);
console.log(newPizza.price("small"));

$(document).ready(function() {
  $("#pizza-builder").submit(function(event) {
    event.preventDefault();
    let userToppings = [];
    $("input:checkbox[name='topping']:checked").each(function(){
      userToppings.push($(this).val());
    });
    console.log(userToppings);
  });  
});

