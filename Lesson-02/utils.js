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

export {sumArray,
        countOccurrences,
        removeDuplicates,
        flattenArray
};