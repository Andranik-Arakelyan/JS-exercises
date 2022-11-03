/*Exercise 7. Shopping Cart
Create a class Product with properties name, type, and price
Create a class ShoppingCart
● In ShoppingCart, define a method addProduct(product)
In ShoppingCart, define a method removeProduct(product)
● In ShoppingCart, define a method totalPrice(), that returns the total amount of
the products it contains.
● Now let's say that, if you buy 5 products or more, you have a 10% discount. Change
totalPrice to reflect this calculation.
● Besides the previous discount, if you buy 3 items of the same type (e.g. 3 pencils)
you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8
pencils you only pay 6, etc.  Change totalPrice so it considers the free items you
get. Notice that if you buy 3 pencils you just pay for the 3 of them.
● Sometimes a product is sold out and has to be replaced by a new one. Add a method
replace(productName, replacementProduct) that looks for products with
productName and replaces them with new instances of the product like
replacementProduct. Notice that productName is a string, and
replacementProduct is a Product */



class Product {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}
  
class ShoppingCart {
    constructor() {
        this.products = [];
    }
  
    addProduct(product) {
        if (product.constructor === Product) {
            this.products.push(product);
        }
    }
  
    removeProduct(product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i] === product) {
                this.products.splice(i, 1);
            }
        }
    }
  
    totalPrice() {
        let productTypes = this.products.reduce((acum, item) => {
            if (item.type in acum) {
                acum[item.type]++;
            } else {
                acum[item.type] = 1;
            }
        
            return acum;
        }, {});
    
        let totalprice = this.products.reduce(function(acum, item) {
            return acum + item.price;
        }, 0);
    
        let bonus = 0;
        for (let type in productTypes) {
            if (productTypes[type] > 3) {
                let price = this.products.find(function(item) {
                    return item.type === type;
                }).price;
                bonus += (productTypes[type] % 3) * price;
            }
        }
        totalprice -= bonus;

        if (this.products.length >= 5) {
            totalprice *= 0.9;
        }
    
        return totalprice.toFixed(2);
    }
  
    replace(productName, replacementProduct) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === productName) {
                this.products[i] = replacementProduct;
            }
        }
    }
}
  
  
  const coffee = new Product("capucino", "drink", 2);
  
  const fastfood = new Product("pizza", "food", 5);
  
  const clothes = new Product("hat", "clothes", 12);
  
  const shoppingCart = new ShoppingCart();

  shoppingCart.addProduct(coffee);
  shoppingCart.addProduct(coffee);
  shoppingCart.addProduct(coffee);
  shoppingCart.addProduct(coffee);
  shoppingCart.addProduct(fastfood);
  shoppingCart.addProduct(fastfood);
  shoppingCart.removeProduct(fastfood);
  shoppingCart.addProduct(clothes);
  shoppingCart.addProduct(clothes);
  shoppingCart.replace("hat", fastfood);
  
  
  console.log(shoppingCart.products);
  console.log(shoppingCart.totalPrice());
  