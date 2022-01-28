function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function(order) {
  if (order === "small") {
    console.log("That will be $10");
    return 10;
  } else if (order === "medium") {
    console.log("That will be $12")
    return 12;
  } else if (order === "large") {
    console.log("That will be $15")
    return 15;
  }
}

// let newPizza = new Pizza(["pepperoni", "pineapple"], "small");
// console.log(newPizza);
// console.log(newPizza.price("small"));

$(document).ready(function() {
  $("#pizza-builder").submit(function(event) {
    event.preventDefault();
    let userSize = $("input:radio[name=size]:checked").val();
    let userToppings = [];
    $("input:checkbox[name='topping']:checked").each(function(){
      userToppings.push($(this).val());
    });  // Could this be refactored as it's own function to be called?
    let userPizza = new Pizza(userToppings, userSize);
    console.log(userPizza);
    console.log(userPizza.price(userSize));
  });  
});

