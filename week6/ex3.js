/* Exercise 3
Create a function that takes a number (from 1 to 12) and returns its corresponding month
name as a string. For example, if you're given 3 as input, your function should return
"March", because March is the 3rd month.
*/

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

function getMonth(num){
    return months[new Date(`${num}/01/2022`).getMonth()];
    //return months[num - 1];
}

console.log(getMonth(1));