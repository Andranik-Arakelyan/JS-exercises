// shift()
// 13. * Create a custom Array.prototype.myShift should work
// similarly to Array.prototype.shift

Array.prototype.myShift = function() {
    if(this.length) {
        let first = this[0];
        for(let i = 0; i < this.length; i++ ) {
            this[i] = this[i+1];
        }
        this.length --;
        return first;
    }
}

let arr = [1, 2, 3, 4];
console.log(arr.myShift(), arr);



// unshift()
// 14. * Create a custom Array.prototype.myUnshift should work
// similarly to Array.prototype.unshift

// Array.prototype.myUnshift = function(...args){
//     for (let i = 0; i < args.length; i++) {
//         for(j = 0; j < this.length; j++){
//         this[this.length - j] = this[this.length - 1 - j];
//         }
//         this[0] = args[i];
//     }
//     return this.length;
// }
 
// console.log(arr.myUnshift(10, 20), arr );      


Array.prototype.myUnshift = function(...args){
  let shiftSize = args.length;
  let maxIndex = this.length - 1 + shiftSize;
  
  for (let i = 0; i < this.length; i++) {
    this[maxIndex - i] = this[maxIndex - i - shiftSize];
  }
  
  for (let i = 0; i < shiftSize; i++) {
    this[i] = args[i];
  }
  
  return this.length;
}




let arr1 = [1,2,3];
console.log(arr1.myUnshift(5,6)); 
console.log(arr1); // 5,6,1,2,3
