// Backend logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

let price = 0;

Pizza.prototype.sizePrice = function(order) {
  if (order === "small") {
    price = 10;
  } else if (order === "medium") {
    price = 12;
  } else if (order === "large") {
    price = 15;
  }
}

Pizza.prototype.toppingsPrice = function(toppings) {
  if(toppings > 0) {
    price = price + (toppings * .50);
    return price;
  } else {
    alert("Select at least one topping");
  }
}

// UI logic
$(document).ready(function() {
  $("#pizza-builder").submit(function(event) {
    event.preventDefault();
    $("#toppingsOutput").empty();
    $("#finalPrice").empty();
    let userSize = $("input:radio[name=size]:checked").val();
    let userToppings = [];
    $("input:checkbox[name='topping']:checked").each(function(){
      userToppings.push(" " + $(this).val() + " ");
    });  // Could this be refactored as it's own function to be called?
    let userPizza = new Pizza(userToppings, userSize);
    let toppingsPrice = userPizza.toppingsPrice(userToppings.length);
    let sizePrice = userPizza.sizePrice(userSize);
    $("#toppingsOutput").append("The size selected is " + sizePrice + ". The toppings selected are: " + userToppings + ". and the price of toppings is" + toppingsPrice + ".");
    $("#finalPrice").append("$" + price);
    $('input[type="checkbox"]').prop('checked', false);
  });  
});

