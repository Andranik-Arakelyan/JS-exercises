/* Exercise 4
From the given array of numbers and strings create 2 new arrays, one containing only
numbers, another one only strings */

function numbersOrStrings(arr){
    let numbers = [];
    let strings = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number"){
            numbers.push(arr[i]);
        }else{
            strings.push(arr[i]);
        }
    }
    console.log(numbers, "\n", strings);
}


numbersOrStrings([1, 2, "You", 3, "know", 5, "nothing", "Jhon Snow", 8]);
