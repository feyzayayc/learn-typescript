"use strict";
// Her dosya sadece bir şeyi default olarak çıkarabilir
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
}
exports.default = Person;
Person.isim = 'feyza';
// Dosya herhangi bir yerde import edilidiğinde tüm dosya çalışır
console.log('person.ts dosyası çalıştı');
