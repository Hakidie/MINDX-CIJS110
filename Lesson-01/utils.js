// 1
export function productInfo(item, price) {
    const formattedPrice = price.toLocaleString('en-US');
    console.log(`Sản phẩm: ${item}, Giá: ${formattedPrice} VNĐ`);
}

// 2
export function greet(name) {
    console.log("Xin chào, " + name + "!");
}

// 3
export function sumUpTo(number) {
    let sum = (number * (number + 1)) / 2; // using Gauss
    console.log(sum);
}

// 4
export function square(number) {
    let square = number * number;
    console.log(square);
}

// 5
export function isEven(number) {
    if(number % 2 === 0)
        console.log(true);
    else
        console.log(false);
}

// 6
export function firstElement(array) {
    console.log(array[0]);
}

// 7
export function sum(...number) {
    let sum = number.reduce((sum, element) => sum + element, 0);
    console.log(sum);
}

// 8
export function getOpjValue(user) {
    let name = user.name;
    let age = user.age;
    console.log("Name: " + name + ", Age: " + age);
}

// 9
export function getOpjName(people) {
    const names = people.map(person => person.name).join(", ");
    console.log(names);
}

// 10
export function stringLength(string) {
    const length = string.length;
    console.log(length);
}

// 11
export function toUpperCase(string) {
    const upperCaseString = string.toUpperCase();
    console.log(upperCaseString);
}

// 12
export function formatCurrency(number) {
    const formatted = number.toLocaleString('en-US');
    console.log(formatted + " VNĐ");
}

// 13
export function max(array) {
    const largest = Math.max(...array);
    console.log(largest);
}

// 14
export function isPrime(number) {
    if(number <= 1) return false;

    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) return false
    }
    
    return true;
}

// 15
export function repeatString(string, number) {
    let repeatString = `${string} `.repeat(number).trim();
    console.log(repeatString);
}

// 16
export function sumOdd(array) {
    let sumOfOdd = array.reduce((sum, number) => {
        if(number % 2 !== 0) {
            return sum + number;
        }
        return sum;    
    },0);

    console.log(sumOfOdd);
}

// 17
export function sumGreaterThan(array, number) {
    let sum = array.reduce((sum, element) => {
        return element > number ? sum + element : sum;
    }, 0);

    console.log(sum);
}

// 18
export function formatDate(date) {
    const parts = date.split("-");
    const reverted = `${parts[2]}-${parts[1]}-${parts[0]}`;
    console.log(reverted);
}

// 19
export function firstThree(array) {
    const elements = array.slice(0, 3);
    console.log(elements);
}

// 20
export function containsChar(string, char) {
    const exist = string.includes(char);
    console.log(exist);
}