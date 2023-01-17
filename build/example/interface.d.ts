interface Cars {
    Brand: string;
    Speed: number;
    FuelTank: number;
    GetFuelPriceTotal: (way: number, unitPrice: number) => number;
}
declare class Taxi implements Cars {
    Brand: string;
    Speed: number;
    FuelTank: number;
    GetFuelPriceTotal(way: number, unitPrice: number): number;
}
declare class Truck implements Cars {
    Brand: string;
    Speed: number;
    FuelTank: number;
    GetFuelPriceTotal(way: number, unitPrice: number): number;
}
declare const _taxi: Taxi;
declare const _truck: Truck;
