/* Exercise 6
For each number in an array, check if that number is greater than the sum of all numbers
that appear before it in the array. If all numbers in the array pass this test, return true.
Return false otherwise.
Note: The first number in any array will always pass the test.
Input Output
[2,3,7,13,28] true
[1,2,4,6,13] false
Explanation:
[2, 3, 7, 13, 28] ➞ true
● 3 > 2 = true
● 7 > 2 + 3 = true
● 13 > 2 + 3 + 7 = true
● 28 > 2 + 3 + 7 + 13 = true
*/

function checkIfGreater(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] <= sum) {
            return false;
        }
        sum += arr[i];
    }
    return true;
}


console.log(checkIfGreater([1,2,4,6,13]));