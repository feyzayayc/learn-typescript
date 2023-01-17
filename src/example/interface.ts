interface Cars {
    Brand: string;
    Speed: number;
    FuelTank: number;
    GetFuelPriceTotal: (way: number, unitPrice: number) => number
}

class Taxi implements Cars {
    Brand: string;
    Speed: number;
    FuelTank: number;
    GetFuelPriceTotal(way: number, unitPrice: number) {
        return way * unitPrice
    };
}

class Truck implements Cars {
    Brand: string;
    Speed: number;
    FuelTank: number;
    GetFuelPriceTotal(way: number, unitPrice: number) {
        return way * unitPrice
    };
}

const _taxi = new Taxi()
const _truck = new Truck()

_taxi.Brand = 'BMW'
_taxi.Speed = 300
_taxi.FuelTank = 100

console.log(_taxi.GetFuelPriceTotal(100, 2))