/* concat()
15. Using concat compute the union of two arrays and then remove
all duplicated items if they exist */


function getUnion(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr.filter(function(item, index){
        return newArr.indexOf(item) === index;
    });
}


console.log(getUnion([1, 2, 5], [5,2,3,6]));


/* 16. * Create a custom Array.prototype.myConcat should work
similarly to Array.prototype.concat
*/

Array.prototype.myConcat = function(arr) {
    return arr.reduce(function(aggr, item){
        aggr[aggr.length] = item;
        return aggr;
    }, this);
}


console.log([1, 2, 3].myConcat([4, 5, 6]));
