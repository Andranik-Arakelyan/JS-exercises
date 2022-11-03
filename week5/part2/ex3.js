/* Exercise 3 Abstract class
Abstract classes are base classes from which other classes may be derived. In other
words, you can’t create an instance with that class, you can only extend from it.
Create a class, which will throw an error if you try to create an instance with it. */

class Abstract {
    constructor() {
        if(new.target) {
            throw new Error("abstract class can't be called by new");
        }
    }
}


let test = new Abstract();