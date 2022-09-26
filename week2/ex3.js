/* Exercise 3
Create a function that, given a number, returns the corresponding value of that index in the
Fibonacci series.
The Fibonacci Sequence is the series of numbers:
1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
The next number is found by adding the two numbers before it:
● The 2 is found by adding the two numbers before it (1+1).
● The 3 is found by adding the two numbers before it (1+2).
● The 5 is (2+3), and so on!
Input Output
3 3
7 21
12 233
*/


function findFibonacciNumber(index) {
    let first = 1;
    let second = 1;
    for( let i = 0; i < index -1; i++) {
        var result = first + second;
        first = second;
        second = result;
    }
    return result;
}

console.log(findFibonacciNumber(12));

