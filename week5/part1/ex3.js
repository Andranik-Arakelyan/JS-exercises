/* Task 3
Create classes named Jungle, Animal, Food, Tiger, Monkey, Snake, Fish,
Grain, Meat.
Tiger, Monkey, Snake should be extended from the class Animal.
Fish, Grain, Meat should be extended from the class Food.
● The Jungle contains 3 species of animals; tigers, monkeys and snakes.
● All animals can do 3 things. Make a sound, eat food and sleep.
● By default when an animal’s energy level changes, it changes in the following
ways:
○ -3 for making a sound.
○ +5 for eating food.
○ +10 for sleeping.
● The jungle can perform a sound off(soundOff). This involves all of the animals in
the jungle each making their sound, along with reporting their energy level.
● Tigers get +5 of energy for sleeping.
● Monkeys get +2 of energy for eating and -4 for making a sound.
● Only monkeys will have the ability to play. When they do so, they say “Oooo Oooo”
and get -8 of energy. If they don't have energy to play, they say “I’m too tired”.
● The jungle contains several types of food (Fish, Grain and Meat), and Tigers
can’t eat Grain because they have sensitive digestive systems. And when they try
to eat Grain , they say “I can’t eat that”.
● Bonus: The jungle can have each animal perform a random activity out of the ones
possible for that animal. */


function randomNumber(n) { 
    return Math.floor( Math.random() * n ); 
} 

class Jungle{
    constructor(){
        this.animals = [];
        this.food = [];
    }
    soundOff() {
       for (let animal of this.animals){
            animal.makeSound();
            console.log(`${animal.name} has ${animal.energy} energy. \n`);
       } 
    }
    bonus() {
        console.log("BONUS");
        let propertyNames;
        let randomMethod, randomFood;

        for (let animal of this.animals){
            propertyNames = Object.getOwnPropertyNames(Animal.prototype)
            propertyNames.push(...Object.getOwnPropertyNames(Object.getPrototypeOf(animal)));  
            propertyNames = propertyNames.filter((item) => item !== "constructor");

            randomFood = this.food[ randomNumber( this.food.length ) ];
            randomMethod = propertyNames[ randomNumber( propertyNames.length ) ];

            console.log(`${animal.name} is ${randomMethod}ing`);

            if (randomMethod === "eat"){
                animal[randomMethod](randomFood);
            } else{
                animal[randomMethod]();
            }

        }
    }
}


class Animal{
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    }

    makeSound() {
        if (this.energy >= 3){
            this.energy -= 3;
        } else {
            console.log(`${this.name} has not enough energy to make a sound`);
        }
    }

    eat(food) {
        this.energy += 5;
        console.log(`${this.name} is eating ${food.name}`);
    }

    sleep() {
        this.energy += 10;
    }
}  


class Tiger extends Animal{
    sleep() {
        this.energy += 5;
    }
    eat(food) {
        if (food instanceof Grain) {
            console.log("I can't eat that");
        } else {
            super.eat(food);

        }
    }
}


class Monkey extends Animal{
    eat(food) {
        super.eat(food);
        this.energy += 2;
    }

    makeSound() {
        if (this.energy >= 4) {
            this.energy -= 4;
        } else {
            console.log("I have not enough energy")
        }
    }

    play() {
        if (this.energy < 8) {
            console.log("I'm too tired");
        } else {
            console.log("Oooo Oooo");
            this.energy -= 8;
        }
        
    }
}


class Snake extends Animal{

}


class Food {
    constructor(name) {
        this.name = name;
    }
}


class Fish extends Food{
}


class Grain extends Food{

}


class Meat extends Food{

}



const J = new Jungle();
const T = new Tiger("White tiger", 2);
const M = new Monkey("gorilla", 18);
const S = new Snake("Python", 14);
const G = new Grain("grain");
const F = new Fish("Tuna");

J.animals.push(T, S, M);
J.food.push(G, F);
console.log(J);
J.bonus();
// J.soundOff();
console.log(J);



