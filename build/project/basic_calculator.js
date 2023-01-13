"use strict";
const sum = (numbers) => {
    let result = 0;
    if (numbers instanceof Array) {
        numbers.forEach((item) => {
            result = result + item;
        });
    }
    return result;
};
const multiply = (numbers) => {
    let result = 1;
    if (numbers instanceof Array) {
        numbers.forEach((item) => {
            result = result * item;
        });
    }
    else {
        result = 0;
    }
    return result;
};
const factorial = (numbers) => {
    let result = 1;
    if (numbers instanceof Array) {
        return "Bu bir array, faktöriyel hesaplanamaz";
    }
    else {
        for (let index = 1; index <= numbers; index++) {
            result = result * index;
        }
    }
    return result;
};
const general = (process, numbers) => {
    if (process == 'sum') {
        return sum(numbers);
    }
    if (process == 'multiply') {
        return multiply(numbers);
    }
    if (process = 'factorial') {
        return factorial(numbers);
    }
};
console.log(general('sum', 5));
