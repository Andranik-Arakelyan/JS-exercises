// indexOf()
// 41. Write a function which is checking if a given element
// contains inside an array


function contains(arr, element){
    if (isNaN(element)){
        return arr.some(item => isNaN(item));
    }

    return arr.indexOf(element) !== -1;
}


console.log(contains([1, 2, 3, 4, 5, NaN, 6], NaN));