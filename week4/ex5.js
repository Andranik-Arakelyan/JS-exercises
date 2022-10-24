/* Task 5
Create a constructor CoffeeShop, which has three properties:
● name : a string (basically, of the shop)
● menu : an array of items (of object type), with each item containing the item (name of
the item), type (whether food or a drink) and price.
● orders : an empty array
and seven methods:
● addOrder: adds the name of the item to the end of the orders array if it exists on the
menu. Otherwise, return "This item is currently unavailable!"
● fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If
the orders array is empty, return "All orders have been fulfilled!"
● listOrders: returns the list of orders taken, otherwise, an empty array.
● dueAmount: returns the total amount due for the orders taken.
● cheapestItem: returns the name of the cheapest item on the menu.
● drinksOnly: returns only the item names of type drink from the menu.
● foodOnly: returns only the item names of type food from the menu.
IMPORTANT:
Orders are fulfilled in a FIFO (first-in, first-out) order.
Notes:
You can create another constructor for menu items.
*/


function Menu(name, type, price){
    this.name = name;
    this.type = type;
    this.price = price;
}
 

function CoffeShop() {
    this.name = "Starbucks";
    this.menu = [new Menu("Capucino", "drink", 2.5), new Menu("Americano", "drink", 3), 
                    new Menu("Spagetti", "food", 5), new Menu("Crap", "food", 4)];
    this.orders = [];
}


CoffeShop.prototype.addOrder = function(item) {
    for(let elem of this.menu) {
        if(elem.name === item) {
            this.orders.push(item);
            return `${item} is added.`;
        } 
    }
    return `${item} is currently unavailable!`;
};

CoffeShop.prototype.fulfillOrder = function(){
    if(this.orders.length){
        let item = this.orders.shift();
        return `The ${item} is ready`;
    } else {
        return "All orders have been fulfilled!";
    }

};

CoffeShop.prototype.listOrders = function() {
    return this.orders;
};

CoffeShop.prototype.dueAmount = function() {
    return this.orders.reduce((acum, itemName) => {
        for(let obj of this.menu) {
            if(itemName === obj.name) {
                return acum + obj.price;
            }
        }
    }, 0);
};

CoffeShop.prototype.cheapestItem = function() {
    return this.menu.reduce(function(acum, item){
        return (item.price < acum.price) ? item: acum;
    }).name;
};

CoffeShop.prototype.drinkOnly = function() {
    return this.menu.filter(function(item){
        return item.type === "drink";
    }).map((item) => item.name);
};

CoffeShop.prototype.foodOnly = function() {
    return this.menu.filter(function(item){
        return item.type === "food";
    }).map((item) => item.name);
};

let starbucks = new CoffeShop();

console.log(starbucks.addOrder("Crap"));
console.log(starbucks.listOrders());
console.log(starbucks.addOrder("Makaroni"));
console.log(starbucks.addOrder("Capucino"));
console.log(starbucks.listOrders());
console.log("The total amount due for the orders taken:", starbucks.dueAmount());
console.log("The cheapest item:", starbucks.cheapestItem());
console.log(starbucks.fulfillOrder());
console.log(starbucks.fulfillOrder());
console.log(starbucks.fulfillOrder());
console.log("Items which are drink: ", starbucks.drinkOnly());
console.log("Items which are food: ", starbucks.foodOnly());


