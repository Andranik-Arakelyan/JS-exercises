/* Exercise 8
Write a function that takes an array as an argument. The function should return true if the
array includes positive numbers more than negatives, and it should return false otherwise.
Գրեք մի ֆունկցիա, որը որպես արգումենտ ընդունում է զանգված: Ֆունկցիան պետք է
վերադարձնիtrue, եթե զանգվածն ավելի շատ դրական թվերէ պարունակում, քան
բացասական, իսկ հակառակ դեպքում այն պետք է վերադարձնիfalse:
Input Output
isPositive([2,3,-2,0,1]) true
isPositive([-2,-5,0,1]) false
isPositive([0,0,0]) false */



function isPositive(arr) {
    let positives = negatives = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positives++;
        } else if(arr[i] < 0){
            negatives++;
        }
    }
    if (positives > negatives){
        return true;
    }
    return false;
}


console.log(isPositive([0,0,0]));