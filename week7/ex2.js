// Exercise 2
// Create a function that finds the highest integer in the array using recursion.
// Note:
// Suppose the array has at least one element.
// Input Output
// [1,2,3,4] 4
// [1,4,6,2,44,56,9] 56
// [2] 2
// [1,1,1] 1


function recursiveMax(arr) {
    let i = 0;
    if (arr.length === 1) {
        return arr[0];
    }

    return Math.max(arr[i], recursiveMax(arr.slice(i+1)));

}


console.log(recursiveMax([1,4,6,2,44,56,9]));