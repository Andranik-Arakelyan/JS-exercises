/* Exercise 10(1)
Create a function that performs an even-odd transform to an array, n times. Each even-odd
transformation:
● Adds two (+2) to each odd integer.
● Subtracts two (-2) from each even integer.
Input Output
[3, 4, 9], 3 [9, -2, 15]
[0, 0, 0], 10 [-20, -20, -20]
[1, 2, 3], 1 [3, 0, 5]
Explanation:
evenOddTransform([3, 4, 9], 3) returns [9, -2, 15]
Since [3, 4, 9] ➞ [5, 2, 11] ➞ [7, 0, 13] ➞ [9, -2, 15]
*/

function evenOddTransform(arr, n) {
    for (i = 0; i < arr.length; i ++) {
        if(arr[i] % 2 === 0) {
            arr[i] -= n * 2;
        } else {
            arr[i] += n * 2;
        }
    }
    return arr;
}


console.log(evenOddTransform([0, 0, 0], 10));
