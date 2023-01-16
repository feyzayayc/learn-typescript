// Her dosya sadece bir şeyi default olarak çıkarabilir

export default class Person {
    static isim = 'feyza'
}

export type Student = {
    name: string,
    age: number,
    class: number
}

// Dosya herhangi bir yerde import edilidiğinde tüm dosya çalışır
console.log('person.ts dosyası çalıştı')