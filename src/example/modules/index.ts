// Person default olarak dışarı aktarıldığı için 

import Person, { Student } from './person'
console.log(Person.isim)

const ogrenci: Student = {
    age: 23,
    name: 'yaycı',
    class: 5
}

console.log(ogrenci)