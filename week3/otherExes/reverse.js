/* reverse()
28. Using reverse, write a function that checks if the string is
a palindrome
*/

function checkPolindrome(str) {
    let reversedStr = str.split("").reverse().join("");    

    return reversedStr === str;
}

console.log(checkPolindrome("AnnA"));
