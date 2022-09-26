/*Exercise 10
Write a function that accepts 2 array arguments and returns a boolean value - Does the first
array contain all elements represented in the second array.
Ստեղծել ֆունկցիա որը ստանում է 2 զանգված եւ վերադարձնում boolean - ստուգելով
արդյոք առաջին զանգվածը պարունակում է 2-րդ զանգվածի բոլոր անդամները: 

["f", "b", "c", "d"]
["b", "c", "a"]

*/


function doesContain(arr1, arr2){
    for (let i = 0; i < arr2.length; i++){
        var isContained = false;
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i] === arr1[j]){
                isContained = true;
                break;
                
            }         
         }
        if(!isContained){
            break;
        }
    }
    return isContained;
}


console.log(doesContain(["a", "b", "c", "d"], ["b", "c", "a"]));
console.log(doesContain(["f", "b", "c", "d"], ["b", "c", "a"]));
