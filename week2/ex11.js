/* Exercise 12
Create a function that takes in an array and returns an array of the accumulating sum.
Note:
An empty array input should return an empty array.
Input Output
[1, 2, 3, 4] [1, 3, 6, 10]
[1, 5, 7] [1, 6, 13]
[1, 0, 1, 0, 1] [1, 1, 2, 2, 3]
[] []
Explanation:
[1, 2, 3, 4] returns [1, 3, 6, 10]
[1, 1+2, 1+2+3, 1+2+3+4]
*/


function getAccumulatingSum(arr) {
    let acc = arr[0]; // 1
    for (let i = 1; i < arr.length; i++){
        arr[i] += acc ;  // 3, 
        acc = arr[i]; // 3
    }
    return arr;
}


console.log(getAccumulatingSum([1, 2, 3, 4]));