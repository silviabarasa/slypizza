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
  function Bill(subtotal, boxes){
    this.subtotalGotten = subtotal;
    this.orderedBoxes = boxes;
  }
  
  Bill.prototype.total = function(){
    return this.subtotalGotten * this.orderedBoxes;
  }
  
  
  
  
  
  
  
  function Bill(subtotal, boxes){
    this.subtotalGotten = subtotal;
    this.orderedBoxes = boxes;
  }
  
  Bill.prototype.total = function(){
    return this.subtotalGotten * this.orderedBoxes;
  }
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navi');
    const navLinks = document.querySelectorAll('.navi li');
    const moto = document.querySelector('#moto');
    const history = document.querySelector('.history');
    const aboutTitle = document.querySelector('.about-title');
    const forms = document.querySelector('#forms');
  
  
    burger.addEventListener('click',()=>{
      nav.classList.toggle('navi-active');
  
      navLinks.forEach((navLink, index)=>{
        if(navLink.style.animation){
          navLink.style.animation=``;
        }
        else{
            navLink.style.animation = `naviFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
      });
      burger.classList.toggle('toggle');
  
      moto.classList.toggle('moto-unseen');
    });
  }
  
  navSlide();
  function switchTopping() {
    if (document.getElementById('toppings')) {
  
        if (document.getElementById('toppings').style.display == 'none') {
            document.getElementById('toppings').style.display = 'block';
            document.getElementById('classic').style.display = 'none';
            document.getElementById('deluxe').style.display = 'none';
        }
        else {
            document.getElementById('toppings').style.display = 'block';
            document.getElementById('classic').style.display = 'none';
            document.getElementById('deluxe').style.display = 'none';
        }
      }
    }
  
  function switchClassic() {
  if (document.getElementById('classic')) {
  
      if (document.getElementById('classic').style.display == 'none') {
          document.getElementById('toppings').style.display = 'none';
          document.getElementById('classic').style.display = 'block';
          document.getElementById('deluxe').style.display = 'none';
      }
      else {
          document.getElementById('toppings').style.display = 'none';
          document.getElementById('classic').style.display = 'block';
          document.getElementById('deluxe').style.display = 'none';
      }
    }
  }
  
  function switchDeluxe() {
    if (document.getElementById('deluxe')) {
  
        if (document.getElementById('deluxe').style.display == 'none') {
            document.getElementById('toppings').style.display = 'none';
            document.getElementById('classic').style.display = 'none';
            document.getElementById('deluxe').style.display = 'block';
        }
        else {
            document.getElementById('toppings').style.display = 'none';
            document.getElementById('classic').style.display = 'none';
            document.getElementById('deluxe').style.display = 'block';
        }
      }
    }  