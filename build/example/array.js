"use strict";
const array1 = []; // dizinin tipi verilmediği için any tipindedir.
const array2 = []; // diznin tipini string olarak belirttiğimiz için artık tip string[] olur
const array3 = [];
const array4 = []; // Eğer dizinin içinde farklı tipte değerler olacaksa bu şekilde tanımlama yapılabilir.
const array5 = [];
const array6 = ['sadad', 3];
array4[0] = true;
array4[1] = 'feyza';
array4[2] = 23;
console.log(array4);
