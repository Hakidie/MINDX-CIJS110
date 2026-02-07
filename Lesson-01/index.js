import {productInfo, greet, sumUpTo, square, isEven, 
        firstElement, sum, getOpjValue, getOpjName, stringLength,
        toUpperCase, formatCurrency, max, isPrime, repeatString,
        sumOdd, sumGreaterThan, formatDate, firstThree, containsChar,
        mergeArrays, countOccurences, filterOdd, greaterThan, factorial,
        separateEvenOdd, sortAsc, sumEvenIndex, multiplyByTwo, arrayToString} from './utils.js';

// 1
console.log(productInfo("Sách", 20000));

// 2
console.log(greet("An"));

// 3
console.log(sumUpTo(5));

// 4
console.log(square(6)); 

// 5
console.log(isEven(7)); 

// 6
console.log(firstElement([1, 2, 3]));

// 7
console.log(sum(1, 2, 3, 4));

// 8
const user = {name: "Nam", age: 30};
console.log(getOpjValue(user));

// 9
const people = [{name: "An"}, {name: "Bình"}];
console.log(getOpjName(people));

// 10
console.log(stringLength("Hello World"));

// 11
console.log(toUpperCase("javascript"));

// 12
console.log(formatCurrency(1000000));

// 13
console.log(max([10, 5, 20, 8]));

// 14
console.log(isPrime(7));

// 15
console.log(repeatString("Hello", 3));

// 16
console.log(sumOdd([1, 2, 3, 4]));

// 17
console.log(sumGreaterThan([1, 2, 3, 4], 2));

// 18
console.log(formatDate("2024-11-28"));

// 19
console.log(firstThree([1, 2, 3, 4, 5]));

// 20
console.log(containsChar("javascript", "i"));

// 21
console.log(mergeArrays([1, 2], [3, 4]));

// 22
console.log(countOccurences([1, 2, 2, 3, 2], 2));

// 23
console.log(filterOdd([1, 2, 3, 4]));

// 24
console.log(greaterThan([1, 2, 3, 4], 2));

// 25
console.log(factorial(5));

// 26
console.log(separateEvenOdd([1, 2, 3, 4]));

// 27
console.log(sortAsc([3, 1, 4, 2]));

// 28
console.log(sumEvenIndex([1, 2, 3, 4]));

// 29
console.log(multiplyByTwo([1, 2, 3]));

// 30
console.log(arrayToString(["a", "b", "c"]));