/* Exercise 10
Create a function that takes an array and returns the sum of all numbers in the array. If there
are no numbers in the array, return 0.
Input Output
[1, 2, "13", "4", "645"] 3
[true, false, "123", "75"] 0
[1, 2, 3, 4, 5, true] 15
*/


function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number'){
            sum += arr[i];
        }
    }
    return sum;
}


console.log(sumOfNumbers([true, false, "123", "75"]))