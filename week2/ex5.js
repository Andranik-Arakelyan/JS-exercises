/* Exercise 5
Write a function that returns all the elements in an array that are strictly greater than their
adjacent left and right neighbors.
Notes:
● Do not count boundary numbers, since they only have one left/right neighbor.
● If no such numbers exist, return an empty array.
Input Output
[4,5,2,1,4,9,7,2] [5,9]
[1,2,1,1,3,2,5,4,4] [2,3,5]
[1,2,3,4,5,6] []
*/

function greaterThanNeighbors(arr) {
    let newArr = [];
    for( let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(greaterThanNeighbors([1,2,1,1,3,2,5,4,4]));





