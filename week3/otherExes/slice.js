// 20. Using slice, write a JavaScript function to clone an array


function cloneArr(arr) {
    return arr.slice();
}

console.log(cloneArr([1, 2, 3, 4]));



// 21. Using slice, Write a JavaScript function to get the last
// element of an array. Passing a parameter 'n' will return the
// last 'n' elements of the array


function getLastElements(arr, n = 1) {
    return arr.slice(-n);
}


console.log(getLastElements([1,2,3,4,5,6], 4));




// 22. Using slice, Write a JavaScript function to get the first
// element of an array. Passing a parameter 'n' will return the
// first 'n' elements of the array


function getFirstElements(arr, n = 1){
    return arr.slice(0,n);

}


console.log(getFirstElements([1,2,3,4,5], 3));



// 23. * Create a custom Array.prototype.mySlice should work
// similarly to Array.prototype.slice

Array.prototype.mySlice = function(startIndex, endIndex) {
    let newArr = [];
    endIndex = endIndex ?? this.length;
    for(let i = startIndex; i < endIndex; i++) {
        newArr.push(this[i]);
    }
    return newArr;
}

let a = [1, 2, 3, 4];
console.log(a.mySlice(1, 3));
