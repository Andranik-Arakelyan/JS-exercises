// 17. Using the splice method, write a function that will fill the
// missing numbers of a sorted array of numbers, to make it
// consecutive.
// Example: [1,2,3,6] should become [1,2,3,4,5,6]



function addMissing(arr) {
    let i = arr[0];
    let j = 0;
    while (i < arr.at(-1)){         
        if (!arr.includes(i)){
            arr.splice(j,0,i);
        }
        j++;
        i++;
    }

    return arr;
}


// console.log(addMissing([1,2,3,6] ));



// 18. Using the splice method, create a function which is removing
// duplicated numbers from a sorted array of numbers


function removeDuplicates(arr){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}


// console.log(removeDuplicates([1, 2, 2, 2, 3, 5])); 



// 19. ** Create a custom Array.prototype.mySplice should work
// similarly to Array.prototype.splice

// Array.prototype.mySplice = function(startIndex, deleteCount, ...args) {
//     let length = this.length;
//     let deletedItems = [];

//     for (let i = 0; i < deleteCount; i++){
//         deletedItems.push(this[startIndex + i]);
//         delete this[startIndex + i];
//     }
//     if(!(deleteCount && args.length)){
//         for(i = startIndex; i < this.length; i++)
//         deletedItems.unshift(this.pop());
//         return deleteCount;
//     }

//     if(args.length){
//         for (let i = 0; i < length - startIndex - deleteCount; i++){
//             this[startIndex + args.length + i] = this[startIndex + deleteCount + i];
//         }
//     } else {
//         for (let i = 0; i < length - startIndex - deleteCount; i++){
//             this[startIndex + i] = this[startIndex + deleteCount + i];
//         }
//         this.length -= length - startIndex - deleteCount;
       
//     }

//     for (let i = 0; i < args.length; i++){
//         this[startIndex + i] = args[i]; 
//     }

//     return deletedItems;
// }


Array.prototype.mySplice = function(startIndex, deleteCount, ...args) {
    let newArr = [];
    let result = this.slice(startIndex, startIndex + deleteCount);     // return deleted part
    newArr.push(...this.slice(0, startIndex), ...args);                // pushing left side of deleted and args

    if (deleteCount !== undefined){                                    // checking deletecount
        newArr.push(...this.slice(startIndex + deleteCount));          // pushing right side of deleted
    } else {
        result = this.slice(startIndex);                               // with one argument
    }
    for(i = 0; i < newArr.length; i++) {                               // asigning newArr to this
        this[i] = newArr[i];
    }
    this.length = newArr.length;                
    return result;

}


let a = [1,2,3,4,5];     
console.log(a.mySplice(1, 0, 10, 20, 30));
console.log(a);

