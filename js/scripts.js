function Order(name, pizza, topping, crust, boxes, delivery) {
    this.customerName = name;
    this.selectedPizza = pizza;
    this.selectedTopping = topping;
    this.selectedCrust = crust;
    this.numberOfBoxes = boxes;
    this.deliveryOption = delivery;
  }
  function Address(city, estate, mobileNumber){
    this.cityName = city;
    this.estateName = estate;
    this.customerMobile = mobileNumber;
  }
  function Price(pizzaPrice, toppingPrice, crustPrice){
    this.priceForSelectedPizza = pizzaPrice;
    this.priceForSelectedTopping = toppingPrice;
    this.priceForSelectedCrust = crustPrice;
  }
  
  Price.prototype.subtotal = function(){
    return this.priceForSelectedPizza + this.priceForSelectedTopping + this.priceForSelectedCrust;
  }