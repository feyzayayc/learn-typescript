"use strict";
// fonksiyon çıktısı number türünde
function test1() {
    return 23;
}
function test2() {
    return ['dadad', 45];
}
function logPerson(name, surname) {
    return `${name + " " + surname} is login.`;
}
const date = new Date();
console.log(logPerson('Feyza', 'Yaycı'));
