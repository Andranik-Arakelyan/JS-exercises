/* Exercise 3
Create a function that takes an array and returns the sum of all numbers in the array. If there
are no numbers in the array, return 0.
Input Output
[1, 2, "13", "4", "645"] 3
 0
[1, 2, 3, 4, 5, true] 15
*/

function sumOfNumber(arr){
    return arr.reduce(function(aggr, item){
        if(typeof(item) === "number") {
            aggr += item;
        }
        return aggr;
    },0);
}

console.log(sumOfNumber([1, 2, 3, 4, 5, true]));