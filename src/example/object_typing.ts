type opsiyonel = Partial<{ // eğer partial tag'larının içinde yazılırsa obje tüm değerler opsiyonel olur
    name: string,
    age: number
}>

// Record js'teki map'e benzelitebilir.
const myObject: Record<string, boolean> = {
    dogrumu: false,
    yanlısmi: true,
}


const object2: Record<string, { name: string, age: number }> = {
    feyza: {
        age: 23,
        name: 'feyza'
    }
}

console.log(object2)