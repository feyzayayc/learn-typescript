"use strict";
class Shop {
    constructor(_name, _price, _amount) {
        this.name = _name;
        this.price = _price;
        this.amount = _amount;
        this.totalPrice = this.amount * this.price;
    }
    getProductInfo() {
        return `Product Name: ${this.name} --> Price: ${this.price} --> Amount: ${this.amount} --> Total: ${this.totalPrice}`;
    }
}
const shop = new Shop('Phone', 1000, 3); //new parametresi sayesinde constructor'da yazılan olan kodlar çalışır
console.log(shop.getProductInfo());
