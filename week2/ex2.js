/*Exercise 2
Create a function that takes an array of numbers and returns the sum of the two lowest
positive numbers.
Input Output
[1,67,223,8,-7,33,5,9,-8] 6 [67,223,1,8,33,5,9]
[3683,2902,3951,-475,1617,-2385] 4519
[2,9,6,-1] 8
[19,5,42,2,77] 7 
*/


function SumTwoLowestNumbers(arr) {
    let positiveArr = arr.filter(function(item){
        return item > 0;
    });
    let min = Math.min(...positiveArr)
    positiveArr.splice(positiveArr.indexOf(min), 1);
    return Math.min(...positiveArr) + min;
    
}


console.log(SumTwoLowestNumbers([3683,2902,3951,-475,1617,-2385]));