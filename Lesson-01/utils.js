
// 1
function productInfo(item, price) {
    const formattedPrice = price.toLocaleString('en-US');
    return `Sản phẩm: ${item}, Giá: ${formattedPrice} VNĐ`;
}

// 2
function greet(name) {
    return `Xin chào, ${name}!`;
}

// 3
function sumUpTo(number) {
    let sum = (number * (number + 1)) / 2; // using Gauss
    return sum;
}

// 4
function square(number) {
    let square = number * number;
    return square;
}

// 5
function isEven(number) {
    if(number % 2 === 0)
        return true;
    else
        return false;
}

// 6
function firstElement(array) {
    return array[0];
}

// 7
function sum(...number) {
    let sum = number.reduce((sum, element) => sum + element, 0);
    return sum;
}

// 8
function getOpjValue(user) {
    // let name = user.name;
    // let age = user.age;
    return `Name: ${user.name}, Age: ${user.age}`;
}

// 9
function getOpjName(people) {
    const names = people.map(person => person.name).join(", ");
    return names;
}

// 10
function stringLength(string) {
    const length = string.length;
    return length;
}

// 11
function toUpperCase(string) {
    const upperCaseString = string.toUpperCase();
    return upperCaseString;
}

// 12
function formatCurrency(number) {
    const formatted = number.toLocaleString('en-US');
    return formatted + " VNĐ";
}

// 13
function max(array) {
    const largest = Math.max(...array);
    return largest;
}

// 14
function isPrime(number) {
    if(number <= 1) return false;

    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) return false
    }
    
    return true;
}

// 15
function repeatString(string, number) {
    let repeatString = `${string} `.repeat(number).trim();
    return repeatString;
}

// 16
function sumOdd(array) {
    let sumOfOdd = array.reduce((sum, number) => {
        if(number % 2 !== 0) {
            return sum + number;
        }
        return sum;    
    },0);

    return sumOfOdd;
}

// 17
function sumGreaterThan(array, number) {
    let sum = array.reduce((sum, element) => {
        return element > number ? sum + element : sum;
    }, 0);

    return sum;
}

// 18
function formatDate(date) {
    const parts = date.split("-");
    const reverted = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return reverted;
}

// 19
function firstThree(array) {
    const elements = array.slice(0, 3);
    return elements;
}

// 20
function containsChar(string, char) {
    const exist = string.includes(char);
    return exist;
}

// 21
function mergeArrays(arrayA, arrayB) {
    const arrayC = [...arrayA, ...arrayB];
    return arrayC;
}

// 22
function countOccurences(array, number) {
    const count = array.reduce((total, element) => {
        return element === number ? ++total : total;
    }, 0);

    return count;
}

// 23
function filterOdd(array) {
    const oddArray = array.filter((element) => element % 2 !== 0);
    return oddArray;
}

// 24
function greaterThan(array, number) {
    const greaterArray = array.filter((element) => element > number);

    return greaterArray;
}

// 25
function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

// 26
function separateEvenOdd(array) {
    const even = [];
    const odd = [];

    array.forEach((element) => {
        element % 2 === 0 ? even.push(element) : odd.push(element);
    });

    return `even: [${even}], odd: [${odd}]`;
}

// 27
function sortAsc(array) {
    array.sort((a, b) => a - b);
    return array;
}

// 28
function sumEvenIndex(array) {
    let sum = array.reduce((sum, number, index) => {
        return index % 2 === 0 ? sum + number : sum;
    }, 0);
    return sum;
}

// 29
function multiplyByTwo(array) {
    return array.map((element) => element * 2);
}

//30
function arrayToString(array) {
    return array.join('');
}

export {
    productInfo,
    greet,
    sumUpTo,
    square,
    isEven,
    firstElement,
    sum,
    getOpjValue,
    getOpjName,
    stringLength,
    toUpperCase,
    formatCurrency,
    max,
    isPrime,
    repeatString,
    sumOdd,
    sumGreaterThan,
    formatDate,
    firstThree,
    containsChar,
    mergeArrays,
    countOccurences,
    filterOdd,
    greaterThan,
    factorial,
    separateEvenOdd,
    sortAsc,
    sumEvenIndex,
    multiplyByTwo,
    arrayToString
};