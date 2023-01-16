"use strict";
// Person default olarak dışarı aktarıldığı için 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
console.log(person_1.default.isim);
const ogrenci = {
    age: 23,
    name: 'yaycı',
    class: 5
};
console.log(ogrenci);
