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

class Ingredients {
    constructor () {
        this.price = 0;
        this.ccal = 0;
    };
    changeDough (dough) {
        this.price += dough.price;
        this.ccal += dough.ccal;
    };
    addTopping (topping) {
        this.price += topping.price;
        this.ccal += topping.ccal;
    };
};

class Pizza extends Ingredients {
    constructor (size) {
        super();
        this.size = size;
    };
    getPrice () {
        return this.price += this.size.price;
    };
    getCcal () {
        return this.ccal +=this.size.ccal;
    };
};