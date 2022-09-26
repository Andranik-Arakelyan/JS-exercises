/* Exercise 9
Create a function to get the sum of each positive element from the given array. If there are
no positive values in the array, return 0.
Input Output
[1,4,-6,23,-1,0] 28
[-1, -5, 7] 7
[-1,-5,-23,-231] 0
*/

function getSumOfPositives(arr) {
   return arr.reduce(function(aggr, item){
        if (item > 0){
            aggr += item;
        }
        return aggr;

    }, 0);

}

console.log(getSumOfPositives([-1,-5,-23,-231]));