/*Find the value that is not being repeated inside the given array.
Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում:
Input Output
["a", "a", "b", "a"] "b"
[1, 1, 3, 3, 4] 4
*/

function findUniqueVAlue(arr){
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
             console.log(arr[i]);
        }
    }
    
    }


    findUniqueVAlue([1, 1, 3, 3, 4, 1, 5, 3, 5,6]);