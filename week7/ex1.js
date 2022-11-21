// Exercise 1
// Write a function that finds the sum of an array. Make your function recursive.
// Input Output
// [1,2,3,4] 10
// [1,4,6,2,44,56,9] 122
// [2] 2
// [] 0


// function recursiveSum(arr) {
//     if (!arr.length) {
//         return 0;
//     }

//     return arr.pop() + recursiveSum(arr);
// }

function recursiveSum(arr) {
     let i = 0;
     if (i === arr.length - 1) {
        return arr[i];
     }   
     return arr[i] + recursiveSum(arr.slice(i + 1));
    
    }
    
console.log(recursiveSum([1,4,6,2,44,56,9]));