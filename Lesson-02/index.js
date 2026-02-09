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
        hasDuplicate
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
console.log(hasDuplicate([1, 2, 3, 4, 2]));