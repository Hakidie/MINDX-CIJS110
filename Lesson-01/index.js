import {productInfo, greet, sumUpTo, square, isEven, 
        firstElement, sum, getOpjValue, getOpjName, stringLength,
        toUpperCase, formatCurrency, max, isPrime, repeatString,
        sumOdd, sumGreaterThan, formatDate, firstThree, containsChar} from './utils.js';

// 1
productInfo("Sách", 20000);

// 2
greet("An");

// 3
sumUpTo(5);

// 4
square(6);

// 5
isEven(7);

// 6
firstElement([1, 2, 3]);

// 7
sum(1, 2, 3, 4);

// 8
const user = {name: "Nam", age: 30};
getOpjValue(user);

// 9
const people = [{name: "An"}, {name: "Bình"}];
getOpjName(people);

// 10
stringLength("Hello World");

// 11
toUpperCase("javascript");

// 12
formatCurrency(1000000);

// 13
max([10, 5, 20, 8]);

// 14
console.log(isPrime(7));

// 15
repeatString("Hello", 3);

// 16
sumOdd([1, 2, 3, 4]);

// 17
sumGreaterThan([1, 2, 3, 4], 2);

// 18
formatDate("2024-11-28");

// 19
firstThree([1, 2, 3, 4, 5]);

// 20
containsChar("javascript", "i");