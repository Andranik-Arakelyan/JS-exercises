/* Exercise 6
Write a function that takes a number as an argument. Return an array containing the two
halves of the number. If the number is odd, make the rightmost number higher.
Ստեղծեք ֆունկցիա, որը կստանա թիվ, որպես արգումենտ, եւ կվերադարձնի զանգված,
որը կպարունակի թվի երկու կեսերը։ Եթե թիվը կենտ է, ապա աջ թիվը պետք է մեծ
լինի մյուսից։
Input Output
numberSplit(4) [2,2]
numberSplit(10) [5,5]
numberSplit(11) [5,6]
numberSplit(-9) [-5,-4]
*/

function numberSplit(number){
    halfArr = [];
    if (number % 2 === 0){
        halfArr.push(number / 2, number / 2);
    } else{
        halfArr.push((number - 1 ) / 2, (number + 1) / 2);
    }
    return halfArr;
}


console.log(numberSplit(-9));
