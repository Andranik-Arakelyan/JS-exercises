/* 
Create a function that takes in an array and returns an array of the accumulating sum.
Note:
An empty array input should return an empty array.
Input Output
[1, 2, 3, 4] [1, 3, 6, 10]
[1, 5, 7] [1, 6, 13]
[1, 0, 1, 0, 1] [1, 1, 2, 2, 3]
[] []
Explanation:
[1, 2, 3, 4] returns [1, 3, 6, 10]
*/


function accumulatingSum(arr) {
    let sum = 0;
    return arr.reduce((aggr, item) => {
        sum += item;
        aggr.push(sum);
        return aggr;
    }, []);
}


// Second solution
function accumulatingSum(arr) {
    let sum = 0;
    return arr.map((item) => {
        sum += item;
        return sum;
    });
}


console.log(accumulatingSum([1, 0, 1, 0, 1]));