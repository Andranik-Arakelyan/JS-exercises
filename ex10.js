/* Exercise 10

Create a function that accepts 2 arrays of words and returns the common words from each.
Գրել ֆունկցիա որը ստանում է 2 զանգված եւ վերադարձնում է նրանց ընդհանուր
տարրերը։
Input 
["dog", "cat", "parrot"]
["lizard", "rat", "cat"]
Output
["cat"] */


// not considered for the case when arrays have repeated words

function findCommonWords(arr1, arr2){
    let arrOfCommons = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                arrOfCommons.push(arr1[i]);
                break;
            }
        }
    }
    
    return arrOfCommons;
}


console.log(findCommonWords(["dog", "cat", "parrot"], ["lizard", "rat", "cat"]));

