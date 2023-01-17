"use strict";
class Taxi {
    GetFuelPriceTotal(way, unitPrice) {
        return way * unitPrice;
    }
    ;
}
class Truck {
    GetFuelPriceTotal(way, unitPrice) {
        return way * unitPrice;
    }
    ;
}
const _taxi = new Taxi();
const _truck = new Truck();
_taxi.Brand = 'BMW';
_taxi.Speed = 300;
_taxi.FuelTank = 100;
console.log(_taxi.GetFuelPriceTotal(100, 2));
