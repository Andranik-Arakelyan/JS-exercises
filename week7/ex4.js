// Exercise 4
// Create a function that takes a number and returns one digit that is the result of summing all
// the digits of the input number. When the sum of the digits consists of more than one digit,
// repeat summing until you get one digit.
// Note:
// Counting the sum of digits and the main task itself should be written in a recursive way.
// Input Output
// 123 6
// 999888777 9
// 111222333 9
// Explanation
// 111222333 → 1+1+1+2+2+2+3+3+3 = 18
// 18 → 1+8 = 9


function sumOfDigits(number) {
    if (number % 10 === number) {
        return number;
    }

    return number % 10 + sumOfDigits(Math.floor(number / 10));
}


function recursiveSumOfDigits(number) {
    let sum = sumOfDigits(number); 
    if (sum % 10 === sum) {
        return sum;
    }

    return recursiveSumOfDigits(sum);
}


console.log(recursiveSumOfDigits(111222333));