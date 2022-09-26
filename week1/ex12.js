/* Exercise 12
Create a function that will reverse the given string.
Ստեղծել ֆունկցիա որը դասավորում է տողը հակառակ հերթականությամբ */

function reverseStr(str){
    console.log(str.split("").reverse().join(""));
}


reverseStr("kratS ayrA");
reverseStr("yadot toN");

// already wrote array reverse function in ex7