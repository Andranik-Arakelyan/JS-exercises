
/* Exercise 7
Write a function that takes an array of numbers as an argument. The function should reverse
the array and return it.
Ստեղծեք ֆունկցիա, որը կստանա թվերի զանգված։ Ֆունկցիան պետք է շրջի
զանգվածը, եւ վերադարձնի այն։
Note:
Don't use the .reverse()method. Try to solve this exercise with for loop.
Մի օգտագործեք.reverse()մեթոդը։ Փորձեք լուծել այսվարժությունըfor ցիկլի
օգնությամբ։
Input Output
getReverse([2,3,5,6,7]) [7,6,5,3,2]
getReverse([1]) [1]
getReverse([2,2,3,1,1]) [1,1,3,2,2]
*/

function getReverse(arr){
    
    for(let i = 0; i < arr.length / 2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
    
}


console.log(getReverse([2,2,3,1,1]));
