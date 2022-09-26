/* Exercise 5
Write a function that takes two numbers as arguments and returns an array containing all the
even numbers between the arguments. If there are no even numbers between the
arguments the function should return “There are no even numbers”.
Գրեք մի ֆունկցիա, որն ընդունում է երկու թիվ որպես արգումենտ եւ վերադարձնում է
զանգված, որը պարունակում է արգումենտների միջեւ եղած բոլոր զույգ թվերը: Եթե
արգումենտների միջեւ զույգ թվեր չկան, ֆունկցիան պետք է վերադարձնի“There are
no even numbers”։

evenFrom(12,20) [14,16,18]
evenFrom(1,12) [2,4,6,8,10]
evenFrom(2,4) “There are no even numbers”
*/

// function evenFrom(num1, num2){
//     let evenNumbers = [];
//     let i = num1 + 1;
//     while(i < num2) {
//         if(i % 2 === 0) {
//             evenNumbers.push(i);
//             i += 2;
//         } else {
//             i++;
//         }
//     }
//     if (evenNumbers.length === 0){
//         return "There are no even numbers";
//     }
//     return evenNumbers;

//     }


// Short version

function evenFrom(a, b) {
    let evenNumbers = [];
    for(let i = (a % 2 === 0) ? a + 2 : a + 1; i < b; i += 2){
        evenNumbers.push(i);
    } 
    if (evenNumbers.length) {
        return evenNumbers;
    }
    return "There are no even numbers";
}




    console.log(evenFrom(1, 12));