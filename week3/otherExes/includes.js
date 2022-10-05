// includes()
// 47. * Create a custom Array.prototype.myIncludes should work
// similarly to Array.prototype.includes


Array.prototype.myIncludes = function(searchElement, fromIndex = 0){
    fromIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (let i = fromIndex; i < this.length; i++){
        if((this[i] === searchElement) || (isNaN(this[i]) && isNaN(searchElement))){
            return true;
        }
    }

    return false;
}


console.log([2,4,6,8,10].myIncludes(6, -3));
console.log([1,2, 5, NaN].myIncludes(NaN));