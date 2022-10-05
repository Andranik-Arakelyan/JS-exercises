/* Exercise 1
Create a function to get the intersection of two arrays.
Input                                              Output
['a', 'b', 'c'],                                   ['a', 'b', 'c']
['a', 'b', 'c', 'd']

['a', 'b', 'c'],                                   []
[]

['a', 'b', 'c', 2],                                [2]
[1,2,4]

*/

function intersection(arr1, arr2) {
    if(arr1.length === 0 || arr2.length === 0) return [];
    return arr1.reduce(function(aggr, item, index){
        if(arr2.includes(item)){
            aggr.push(item);
        }
        return aggr;

    }, []);
}


console.log(intersection(['a', 'b', 'c', 2],[]));







