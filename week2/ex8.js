/* Exercise 8
Create a function to get the intersection of two arrays.
Input 
['a', 'b', 'c'],
['a', 'b', 'c', 'd']
Output
['a', 'b', 'c']
Input
['a', 'b', 'c'],
[]
Output
[]
Input
['a', 'b', 'c', 2],
[1,2,4]
Output
[2]
*/

function getIntersection(arr1, arr2) {
    if(arr1.length === 0 || arr2.length === 0) return [];
    let commonArr = [];
    for(i = 0; i < arr1.length; i++) {
        for(j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j] && commonArr.indexOf(arr1[i]) === -1) {
                commonArr.push(arr1[i]);
                break;
            }
        }
    }
    return commonArr;
}


console.log(getIntersection(['a', 'b', 'a', 'c'],['a', 'b', 'c', 'd']));