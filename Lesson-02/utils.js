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

export {sumArray,
        countOccurrences,
        removeDuplicates,
        flattenArray,
        isSymmetric,
        findSecondLargest,
        sortProductsByPrice,
        findMostExpensiveProduct,
        groupByType
};