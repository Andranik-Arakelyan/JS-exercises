/* Exercise 2
Find the smallest and the largest number from the supplied numeric array. Return an array
containing these numbers.
Գտնել զանգվածի ամենափոքր եւ ամենամեծ տարրերը եւ վերադարձնել նոր զանգվածի
մեջ։
Input Output
[14, 28, 3, 8, 2] [2, 28]
[1, -1, 4, 5 66, 9] [-1, 66]
*/

function minMaxFinder(arr){
    let min = max = arr[0];
    let newArr = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    newArr.push(min, max);
    return newArr;
}


console.log(minMaxFinder([14, 28, 3, 8, 2]));