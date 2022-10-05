// General
// 48. Write a function to check whether an `input` is an array or
// not. Provide 2 different solutions

 //first solution 
function isAnArray1(input){
    return Array.isArray(input);
}


console.log(isAnArray1('abhbvu'));


//second solution
function isAnArray2(input){
    if ((typeof input === 'object') && (input !== null) && (input.length !== undefined)){
        return true;
    }

    return false;
}


console.log(isAnArray2({a:5}));
console.log(isAnArray2([1,2,3]));


// 49. Write a function to find the difference of two arrays


function differenceBetween(arr1, arr2) {
    let diffOf1 = arr1.filter((item, index) => !arr2.includes(item) && arr1.indexOf(item) === index);
    let diffOf2 = arr2.filter((item, index) => !arr1.includes(item) && arr2.indexOf(item) === index);
    return diffOf1.concat(diffOf2);
}


console.log(differenceBetween([1, 2, 3, 3, 4], [1, 2, 5, 4, 5]));

// 50. Write a function that will receive the length and the value
// and will return a pre-filled array
// Example: prefillArray(2, ‘Bla Bla`)
// should return [‘Bla Bla`, ‘Bla Bla`]


function prefillArray(length,value) {
    let result = [];
    for(let i = 0; i < length; i++){
        result[i] = value;
    }
    return result;
}


console.log(prefillArray(5, "bye"));