// Backend logic
function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

Pizza.prototype.sizePrice = function(order) {
  if (order === "small") {
    this.price += 10;
  } else if (order === "medium") {
    this.price += 12;
  } else if (order === "large") {
    this.price += 15;
  } else {
    return "There was an error with size price"
  }
}

Pizza.prototype.toppingsPrice = function(toppings) {
  if(toppings > 0) {
    this.price += (toppings * .50);
    return this.price;
  } else {
    return "There was an error with toppings price"
  }
}

let getToppings = function() {
  let userToppings = [];
  $(`input:checkbox[name='topping']:checked`).each(function(){
    userToppings.push(" " + $(this).val() + " ");
  });
  let toppingLength = userToppings.length;
  return toppingLength;
  
}

// UI logic
$(document).ready(function() {
  $("#pizza-builder").submit(function(event) {
    event.preventDefault();
    $("#toppingsOutput").empty();
    $("#finalPrice").empty();
    let userSize = $("input:radio[name=size]:checked").val();
    let userToppings = getToppings();
    if (userToppings != 0) {
      let userPizza = new Pizza(userToppings, userSize, 0);
      userPizza.toppingsPrice(userToppings);
      userPizza.sizePrice(userSize);
      $("#finalPrice").append("$" + userPizza.price);
      $('input[type="checkbox"]').prop('checked', false);
      $("#results").show();
      $("#pizza-builder").hide();
    } else {
      alert("You must select at least one topping");
    }
  });  

  $("#new-order").on('click', function() {
    $("#results").hide();
    $("#pizza-builder").show();
  })
});

