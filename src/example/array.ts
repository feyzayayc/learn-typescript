const array1 = [] // dizinin tipi verilmediği için any tipindedir.
const array2: string[] = [] // diznin tipini string olarak belirttiğimiz için artık tip string[] olur
const array3 = [] as string[]
const array4: (string | number | boolean)[] = [] // Eğer dizinin içinde farklı tipte değerler olacaksa bu şekilde tanımlama yapılabilir.
const array5 = [] as Array<string>
const array6: [string, number] = ['sadad', 3]


array4[0] = true
array4[1] = 'feyza'
array4[2] = 23

console.log(array4)

