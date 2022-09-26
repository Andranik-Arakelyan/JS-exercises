/* Exercise 9
Write a function to return only unique values of the given array.
Ստեղծել ֆւնկցիա որը վերադարձնում է տրված զանգվածի միայն չկրկնվող
անդամները։ */


function findUniqueVAlue(arr){
    let uniqueVals = [];
    for (let i = 0; i < arr.length; i++){       
        let isUnique = true; 
        
        for(let j = 0; j < arr.length; j++){
            if(i === j){
                continue;
            }
            if(arr[i] === arr[j]){
                isUnique = false;
                break;            
            }
            
        }
        if(isUnique){
             uniqueVals.push(arr[i]);
        }
    }
    return uniqueVals;
}


console.log(findUniqueVAlue([1, 2, 3, 2, 1, 2, 7]));

