// from
//44. Using from, write a JavaScript function to clone an array


function cloneArray(arr){
    return Array.from(arr);
}


let a = [1,2,3,4];
console.log(cloneArray(a));
console.log( a === cloneArray(a));



// //45. Using from, and Set create a function that is removing
// duplicates from an array


function removeDuplicates(arr){
    let x = new Set(arr);
    let newArr = Array.from(x);
    for(let i = 0; i < newArr.length; i++) {
        arr[i] = newArr[i];
    }
    arr.length = newArr.length;
    return arr;
}


let arr = [1,2,3,2];
console.log(removeDuplicates(arr));



// 46. Using from, turn the string into an array
//

function stringToArray(str){
    return Array.from(str);
}


console.log(stringToArray('Arya Stark'));

