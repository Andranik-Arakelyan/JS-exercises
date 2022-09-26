/* Exercise 4
Create a function that takes a number as an argument and returns true or false
depending on whether the number is symmetrical or not. A number is symmetrical when it
is the same as its reverse.
Note: Please try to solve it without turning the parameter into a string.
Input Output
23432 true
78907 false
45454 true 
*/

function checkSymetrizm(number) {
    let reversed = 0;
    let original = number;
    while(number){
        let lastDigit = number % 10;
        reversed = reversed * 10 + lastDigit;
        number = Math.floor(number / 10);
    }
    return original === reversed;
}


console.log(checkSymetrizm(78907));