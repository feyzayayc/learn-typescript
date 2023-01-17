abstract class Department {

    constructor(_departmenName: string) {
        this.DepartmentName = _departmenName
    }
    DepartmentName: string

    GetDepartmentName(): void {
        console.log(`Department Name: ${this.DepartmentName}`)
    }
}

class ITDepartment extends Department {
    GetDepartmentFloor(floor: number): string {
        return `Floor: ${floor}`
    }
}

let departman = new ITDepartment('Ar-Ge')
console.log(departman.DepartmentName)
console.log(departman.GetDepartmentFloor(4))