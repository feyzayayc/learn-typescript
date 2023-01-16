import { type } from "os"

type Colors = 'red' | 'green' | 'blue'
type CustomColors = 'black' | 'yellow' | 'grey'
type AllColors = Colors | CustomColors


const color1: Colors = "green"
const colors2: Colors[] = ['red', 'blue']

const colorArray: (Colors | CustomColors)[] = ["yellow", "blue", "grey"]
const colors: AllColors[] = ["black", "blue"]
console.log(colorArray)
console.log(colors)


// Tip Birleştirme
type Dog = {
    name: string,
    age: number
}

type Person = {
    name: string,
    surname?: string,
    age: number,
    class: number
}

// iki  farklı tip bu şekilde birleştirilebilir
type DogPerson = Dog & Person

const personDog: DogPerson = {
    name: 'karabaş',
    surname: "fdsfs",
    age: 12,
    class: 4
}


// Extra 
const myMap = new Map<string, Person>() // js map özelliğine tip desteği sağladık
myMap.set('feyza', {
    name: 'feyza',
    age: 22,
    class: 22
})

console.log(myMap)