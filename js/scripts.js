// Backend logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function(order) {
  if (order === "small") {
    return 10;
  } else if (order === "medium") {
    return 12;
  } else if (order === "large") {
    return 15;
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
    $("#toppingsOutput").append("The toppings selected are: " + userToppings);
    $("#finalPrice").append("$" + userPizza.price(userSize));
    $('input[type="checkbox"]').prop('checked', false);
  });  
});

