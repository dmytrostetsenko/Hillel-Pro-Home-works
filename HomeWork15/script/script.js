const SIZE_SMALL = {
    price: 50,
    ccal: 20,
};
const SIZE_MEDIUM = {
    price: 75,
    ccal: 30,
};
const SIZE_LARGE = {
    price: 100,
    ccal: 40,
};
const THIN = {
    price: 0,
    ccal: 0,
};
const THICK = {
    price: 0,
    ccal: 10,
};
const TOPPING_CHEASE = {
    price: 10,
    ccal: 20,
};
const TOPING_ANANAS = {
    price: 15,
    ccal: 5,
};
const TOPING_SOUSE = {
    price: 20,
    ccal: 5,
};
const TOPING_PEPPER = {
    price: 15,
    ccal: 0,
};
const TOPING_SAUSAGE = {
    price: 20,
    ccal: 5,
};


function Pizza (size) {
    this.size = size;
    this.price = 0;
    this.ccal = 0;
};
function Ingredients () {
    this.changeDough = function(dough) {
        this.price += dough.price;
        this.ccal += dough.ccal;
    };
    this.addTopping = function(topping) {
        this.price += topping.price;
        this.ccal += topping.ccal;
    };
};

Pizza.prototype = new Ingredients();
Pizza.prototype.getPrice = function () {
    return this.price += this.size.price;
};
Pizza.prototype.getCcal = function (){
    return this.ccal += this.size.ccal;
};