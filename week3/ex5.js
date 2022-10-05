/* Exercise 5
Create a function that takes an array of numbers nums as an argument. Square each
number in the array if the number is even and square root the number if it is odd. Return the
sum of the new array rounded to two decimal places.
Input Output
[1, 3, 3, 1, 10] 105.46
[2, 3, 4, 5] 23.97
[1, 31, 3, 11, 0] 11.62
*/

function sumSquareRoot(nums) {
    return nums.reduce(function(aggr, item){
        aggr += item % 2 ? item ** 0.5 : item ** 2;
        return aggr;
    }, 0).toFixed(2);
}


console.log(sumSquareRoot([1, 31, 3, 11, 0]));