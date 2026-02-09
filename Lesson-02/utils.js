// 1
function sumArray(arr) {
    return arr.reduce((sum, element) => sum + element, 0);
}

// 2
function countOccurrences(arr, value) {
    return arr.reduce((count, element) => {
        return element === value ? ++count : count
    }, 0);
}

// 3
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 4
function flattenArray(arr) {
    // const oneDArray = [...arr[0], ...arr[1]];
    const oneDArray = arr.flat();
    return oneDArray;
}

// 5
function isSymmetric(arr) {
    let symmetric = true;
    for(let i = 0; i < arr.length / 2; i++) {
        if(arr[i] !== arr[arr.length - 1 - i]) {
            symmetric = false;
            break;
        }
    }
    return symmetric;
    // return arr.every((element, i) => {
    //     return element === arr[arr.length - 1 - i]
    // });
}

// 6
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[1];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } 
        else if(arr[i] > secondLargest && arr[i] < largest)
            secondLargest = arr[i];
    }
    return secondLargest;
}

// 7
function sortProductsByPrice(products) {
    return products.sort((productA, productB) => productA.price - productB.price);
}

// 8
function findMostExpensiveProduct(products) {
    return products.reduce((mostExpensive, product) => {
        return product.price > mostExpensive.price ? product : mostExpensive
    }, products[0]);
}

// 9
function groupByType(arr) {
    // const group = { fruit: [], 
    //                 vegetable: [] };

    // arr.forEach((product) => {
    //     if(product.type === "fruit") 
    //         return group.fruit.push(product.name)
    //     else if (product.type === "vegetable")
    //         return group.vegetable.push(product.name)
    // });

    const group = {};

    arr.forEach((product) => {
        const type = product.type;
        if(!group[type])
            group[type] = [];

        group[type].push(product.name);
    });

    return group;
}

// 10
function isSubset(arr1, arr2) {
    const arr1Set = new Set(arr1);
    return arr2.every(element => arr1Set.has(element));
}

// 11
function findMaxKey(obj) {
    let largestKey = null;
    let largestValue = Object.values(obj)[0];

    for(const key in obj) {
        if(obj[key] > largestValue) {
            largestValue = obj[key];
            largestKey = key;
        }
    }

    return largestKey;
}

// 15
function hasDuplicate(arr) {
    const existSet = new Set();

    for(const element of arr) {
        if(existSet.has(element))
            return true;
        existSet.add(element);
    }
    return false;

    // return new Set(arr).size !== arr.length; so sanh  length cua Set va arr, neu no khac => bi lap /o\
}

// 16 
function sumByGroup(arr) {
    const group = {};

    for(const product of arr) {
        group[product.type] = group[product.type] || 0;
        group[product.type] += product.price; 
    }

    return group;
}

// 17
function uniqueValues(arr1, arr2) {
    const mergedArray = new Set([...arr1, ...arr2]);
    return [...mergedArray];
}

// 19
function findLongestString(arr) {
    const longestString = arr.reduce((longest, string) => string.length > longest.length ? string : longest);
    return longestString;
}

// 20
function intersection(arr1, arr2) {
    // Make arr1 into a set (object) then get common values and put them in a set to remove duplicate
    // Finally, change the set back to an array
    const arr1Set = new Set(arr1);
    const commonValues = new Set(arr2.filter((number) => arr1Set.has(number)));
    return [...commonValues];
}

// 21
function filterByMinValue(arr, minValue) {
    const filtered = arr.filter((number) => number >= minValue);
    return filtered;
}

// 22
function findLongestValue(obj) {
    // Convert obj into array then use reduce to find longest string of each pair of array
    const longestValue = Object.entries(obj).reduce((longest, element) => element[1].length > longest[1].length ? element : longest);
    return longestValue[1];
}


// 23
function groupByFirstLetter(fruits) {
    const group = {};

    for(const fruit of fruits) {
        // if(!group[fruit[0]])
        //     group[fruit[0]] = [];
        group[fruit[0]] = group[fruit[0]] || [];

        group[fruit[0]].push(fruit);
    } 

    return group;
}

// 24
function getAdult(people) {
    return people.filter((person) => person.age >= 18);
}

// 25
function convertToArray(obj) {
    return Object.entries(obj);
}

// 27
function sumByKey(arr, key) {
    return arr.reduce((sum, obj) => sum += obj[key], 0);
}

// 28
function countWords(str) {
    const result = str.trim().split(" ");
    return result.length;
}

// 29
function findMinKey(obj) {
    let smallestKey = null;
    let smallestValue = Object.values(obj)[0];

    for(const key in obj) {
        if(obj[key] < smallestValue) {
            smallestValue = obj[key];
            smallestKey = key;
        }
    }

    return smallestKey;
}

export {sumArray,
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
        hasDuplicate,
        sumByGroup,
        uniqueValues,
        findLongestString,
        intersection,
        filterByMinValue,
        findLongestValue,
        groupByFirstLetter,
        getAdult,
        convertToArray,
        sumByKey,
        countWords,
        findMinKey
};