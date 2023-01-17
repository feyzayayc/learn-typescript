declare class Shop {
    constructor(_name: string, _price: number, _amount: number);
    name: string;
    price: number;
    amount: number;
    totalPrice: number;
    getProductInfo(): string;
}
declare const shop: Shop;
