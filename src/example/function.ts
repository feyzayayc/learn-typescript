// fonksiyon çıktısı number türünde
function test1(): number {
    return 23
}

function test2(): [string, number] {
    return ['dadad', 45]
}

function logPerson(name: string, surname: string): string {
    return `${name + " " + surname} is login.`
}

const date = new Date()
console.log(logPerson('Feyza', 'Yaycı'))