/*Create a function that determines whether a shopping order is eligible for free shipping. An
order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
Examples:
freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams":
13.99 }) ➞ true */


function freeShipping(obj) {
    let total = 0;
    for(let key in obj) {
        total += obj[key];
    }
    return total > 50 ? true : false; 

}


console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams":
13.99 }));