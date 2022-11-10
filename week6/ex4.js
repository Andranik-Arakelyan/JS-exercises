/*Create a function that takes three values:
● h hours
● m minutes
● s seconds
Return the value that's the longest duration.
Examples:

longestTime(1, 59, 3598) ➞ 1
longestTime(2, 300, 15000) ➞ 300
longestTime(15, 955, 59400) ➞ 59400
 */

 
function longestTime(h, m, s) {
    const max = Math.max(...[h * 3600, m * 60, s]);
    if(max / 3600 === h) return h;
    if(max / 60 === m) return m;
    if(max === s) return s;
    // const arr = [h * 3600, m * 60, s];
    // return arguments[arr.indexOf(Math.max(...arr))];
}

console.log(longestTime(1, 59, 3598));
console.log(longestTime(2, 300, 15000));
console.log(longestTime(15, 955, 59400));