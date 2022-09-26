/* Exercise 7
Write a function that takes two sorted arrays of numbers and returns an array of numbers
which are common to both the input arrays.
Input Output
getCommonElements([-1,3,4,6,7,9], [1,3]) [3]
getCommonElements([1,3,4,6,7,9], [1,2,3,4,7,10]) [1,3,4,7]
getCommonElements([1,2,2,2,3,4,5], [1,2,4,5]) [1,2,4,5]
getCommonElements([1,2,3,4,5], [10,12,13,15]) []
*/

/*function getCommonElements(arr1, arr2) {
    if(arr1.length > arr2.length) {
       let newarr1 = arr1.filter(function(item) {
        return item >= arr2[0] && item <= arr2[arr2.length - 1];
        })
        console.log(newarr1);
    }

}*/


function getCommonElements(arr1, arr2) {
    if (arr1[arr1.length - 1] < arr2[0] || arr1[0] > arr2[arr2.length - 1]){
        return [];
    }
    let commonArr = [];
    for(i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[arr2.length-1]) break;

        for(j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j] && arr1[i] !== arr1[i - 1]){
                commonArr.push(arr1[i]);
                break;
            }
            if(arr2[j] > arr1[i]) break;
        }
    }
    return commonArr;
}


console.log(getCommonElements([1,3,4,6,7,9], [1,2,3,4,7,10]));


