/* Exercise 2. CoffeeShop
Create a constructor CoffeeShop, which has three properties:
● name : a string (basically, of the shop)
● menu : an array of items (of object type), with each item containing the item (name of
the item), type (whether food or a drink) and price.
● orders : an empty array
and seven methods:
● addOrder: adds the name of the item to the end of the orders array if it exists on the
menu. Otherwise, return "This item is currently unavailable!"
● fulfillOrder: if the orders array is not empty, return "The {item} is ready!".
If the orders array is empty, return "All orders have been fulfilled!"
● listOrders: returns the list of orders taken, otherwise, an empty array.
● dueAmount: returns the total amount due for the orders taken.
● cheapestItem: returns the name of the cheapest item on the menu.
● drinksOnly: returns only the item names of type drink from the menu.
● foodOnly: returns only the item names of type food from the menu.
IMPORTANT:
Orders are fulfilled in a FIFO (first-in, first-out) order.
Notes:
You can create another constructor for menu items. */

class Menu{
    constructor(name, type, price){
        this.name = name;
        this.type = type;
        this.price = price;
    }
}


class CoffeShop{
    constructor(){
        this.name = "Starbucks";
        this.menu = [new Menu("Capucino", "drink", 2.5), new Menu("Americano", "drink", 3), 
                        new Menu("Spagetti", "food", 5), new Menu("Crap", "food", 4)];
        this.orders = [];
    }


    addOrder(item) {
        for(let elem of this.menu) {
            if(elem.name === item) {
                this.orders.push(item);
                return `${item} is added.`;
            } 
        }
        return `${item} is currently unavailable!`;
    };
    
    fulfillOrder(item){
        if(this.orders.length){
            let item = this.orders.shift();
            return `The ${item} is ready`;
        } else {
            return "All orders have been fulfilled!";
        }

    };

    get listOrders() {
        return this.orders;
    };

    dueAmount() {
        return this.orders.reduce((acum, itemName) => {
            for(let obj of this.menu) {
                if(itemName === obj.name) {
                    return acum + obj.price;
                }
            }
        }, 0);
    };


    cheapestItem() {
        return this.menu.reduce(function(acum, item){
            return (item.price < acum.price) ? item: acum;
        }).name;
    };

    drinksOnly() {
        return this.menu.filter(function(item){
            return item.type === "drink";
        }).map((item) => item.name);
    };

    foodOnly() {
        return this.menu.filter(function(item){
            return item.type === "food";
        }).map((item) => item.name);
    };
}

let tcs = new CoffeShop();
tcs.menu.push(new Menu('cinnamon roll', 'food', 8.6));
tcs.menu.push(new Menu('iced coffee', 'drink', 6));

console.log(tcs.addOrder("cinnamon roll"));
console.log(tcs.addOrder("iced coffee"));
console.log(tcs.addOrder("hot cocoa"));
console.log(tcs.listOrders);
console.log(tcs.dueAmount());
console.log(tcs.fulfillOrder());
console.log(tcs.fulfillOrder());
console.log(tcs.fulfillOrder());
console.log(tcs.listOrders);
console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodOnly());