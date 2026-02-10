import {sumArray,
        countOccurrences,
        removeDuplicates,
        flattenArray,
        isSymmetric,
        findSecondLargest,
        sortProductsByPrice,
        findMostExpensiveProduct,
        groupByType,
        isSubset,
        findMaxKey,
        mergeObjectsSumValues,
        countElements,
        cleanObject,
        hasDuplicate,
        sumByGroup,
        uniqueValues,
        isPermutation,
        findLongestString,
        intersection,
        filterByMinValue,
        findLongestValue,
        groupByFirstLetter,
        getAdult,
        convertToArray,
        sortStringsByLength,
        sumByKey,
        countWords,
        findMinKey
} from './utils.js'; 

// 1
console.log(sumArray([1, 2, 3, 4]));

// 2
console.log(countOccurrences([1, 2, 2, 3, 2], 2));

// 3
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));

// 4
console.log(flattenArray([[1, 2], [3, 4]]));

// 5
console.log(isSymmetric([1, 2, 3, 2, 1]));

// 6
console.log(findSecondLargest([3, 1, 4, 2, 4]));

// 7
console.log(sortProductsByPrice([ { name: 'Product A', price: 30 },
                                  { name: 'Product B', price: 20 },
                                  { name: 'Product C', price: 50 } ]));

// 8
console.log(findMostExpensiveProduct([ { name: 'Product A', price: 30 },
                                       { name: 'Product B', price: 20 },
                                       { name: 'Product C', price: 50 } ]));

// 9
console.log(groupByType([ { type: 'fruit', name: 'apple' },
                          { type: 'vegetable', name: 'carrot' },
                          { type: 'fruit', name: 'banana' } ]));

// 10
console.log(isSubset([1, 2, 3, 4], [2, 4]));

// 11
console.log(findMaxKey({ a: 10, b: 20, c: 15 }));

// 12
console.log(mergeObjectsSumValues( { a: 10, b: 20 }, 
                                   { b: 30, c: 40 } ));

// 13
console.log(countElements(['a', 'b', 'a', 'c', 'b', 'a']));

// 14
console.log(cleanObject({ a: 1, b: null, c: undefined, d: 4 }));

// 15
console.log(hasDuplicate([1, 2, 3, 4, 2]));

// 16
console.log(sumByGroup([ { type: 'fruit', price: 10 },
                         { type: 'vegetable', price: 20 },
                         { type: 'fruit', price: 30 }] ));

// 17
console.log(uniqueValues([1, 2, 3], [3, 4, 5]));

// 18
console.log(isPermutation([1, 2, 3], [3, 2, 1]));

// 19
console.log(findLongestString(['abc', 'abcd', 'a']));

// 20
console.log(intersection([1, 2, 3], [2, 3, 4]));

// 21
console.log(filterByMinValue([5, 10, 15, 20], 12));

// 22
const animals = {a: 'cat', 
                 b: 'elephant', 
                 c: 'dog'}

console.log(findLongestValue(animals));

// 23
const fruits = ['apple', 'banana', 'avocado', 'blueberry']
console.log(groupByFirstLetter(fruits));

// 24
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
];

console.log(getAdult(people));

// 25
console.log(convertToArray({ a: 1, b: 2, c: 3 }));

// 26
console.log(sortStringsByLength(['a', 'ccc', 'bb']));

// 27
console.log(sumByKey([  { type: 'fruit', price: 10 },
                        { type: 'vegetable', price: 20 },
                        { type: 'fruit', price: 30 } ], 'price' ));

// 28
let str28 = "Hello world! Welcome to JavaScript"
console.log(countWords(str28));

// 29
console.log(findMinKey({ a: 100, b: 20, c: 50 }));

