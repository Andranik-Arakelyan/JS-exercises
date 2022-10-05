/* Exercise 4
Create a function that performs an even-odd transform to an array, n times. Each even-odd
transformation:
● Adds two (+2) to each odd integer.
● Subtracts two (-2) from each even integer.
Input Output
[3, 4, 9], 3 [9, -2, 15]
[0, 0, 0], 10 [-20, -20, -20]
[1, 2, 3], 1 [3, 0, 5]
*/

function transForm(arr, n) {
    return arr.map(function(item){
        if (item % 2){
            return item + n * 2;
        }
        return item - n * 2;
    });
}


console.log(transForm([1, 2, 3], 1));

