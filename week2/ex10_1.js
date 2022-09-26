/* Exercise 11
Create a function that takes an array of numbers nums as an argument. Square each
number in the array if the number is even and square root the number if it is odd. Return the
sum of the new array rounded to two decimal places.
Input Output
[1, 3, 3, 1, 10] 105.46
[2, 3, 4, 5] 23.97
[1, 31, 3, 11, 0] 11.62
Explanation:
[2, 4, 9] returns 23
2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
*/

function squareRootAndSum(arr) {
    let sum = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            sum += Math.pow(arr[i],2);
        } else {
            sum += Math.sqrt(arr[i]);
        }
    }
    return Math.round(sum * 100) / 100;
}


console.log(squareRootAndSum([1, 3, 3, 1, 10]));

