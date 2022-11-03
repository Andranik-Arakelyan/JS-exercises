/* Exercise 4.1. Class hierarchy
Implement the described class hierarchy: the Character class is the parent class for all
the others. 6 child classes Bowerman, Swordsman, Magician, Daemon, Undead, and
Zombie inherit from it, setting their own characteristics.
1.  Properties that instances of the Character class should have:
name - name
type - type
health - standard of living
level - character level
attack - attack
defense - protection
2. The class constructor must meet the following requirements:
name - string, min - 2 characters, max - 10
type - one of the types (string): Bowman, Swordsman, Magician, Daemon,
Undead, Zombie
If incorrect values   are passed, an error should be thrown
throw new Error(...)
3. Your function should automatically set the following fields:
health: 100
level: 1
Attack / Defense:
● Bowman: 25/25
● Swordsman: 40/10
● Magician: 10/40
● Undead: 25/25
● Zombie: 40/10
● Daemon: 10/40 */



/* Exercise 4.2. Class hierarchy
Implement the levelUp method in the Character class, which works like this:
● Raises the level field by 1
● Increases attack and defense by 20%
● Sets health to 100
The method should work only if the life indicator is not equal to 0. Otherwise, an error is
generated (you cannot increase the level of the deceased).
Implement the damage(points) method in the Character class, which changes the
internal state of the object (points is the damage done to the character). The
damage(points) method does not return anything and calculates the final change in the
character's health (health) according to the formula:
health -= points * (1 - defense / 100),
given that the value of health >= 0. */



const characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon',
'Undead', 'Zombie'];

class Character{
    constructor(name, type, attack, defense){
        if (typeof(name) === 'string' && name.length >= 2 && name.length <= 10){
            this.name = name;
        } else {
            throw new Error('Name must have min 2 and max 10 characters')
        }
        if (characterTypes.includes(type)){
            this.type = type;
        } else {
            throw new Error(`Type must be one of the ${characterTypes}`);
        }
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defense = defense;
        this.alive = true; 
    }

    levelUp() {
        if(this.alive) {
            this.level++;
            this.health = 100;
            this.attack *= 1.2;
            this.defense *= 1.2;
        } else {
            throw new Error("You cannot increase the level of the deceased");
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defense/100);
        if(this.health <= 0) {
            this.alive = false;
        }
    }

}


class Bowman extends Character{
    constructor(name, type) {
        super(name, type, 25, 25);
    }
}


class Swordsman extends Character{
    constructor(name, type) {
        super(name, type, 40, 10);
    }
}


class Magician extends Character{
    constructor(name, type) {
        super(name, type, 10, 40);
      }
}


class Daemon extends Character{
    constructor(name, type) {
        super(name, type, 10, 40);
      }
}


class Undead extends Character{
    constructor(name, type) {
        super(name, type, 25, 25);
      }    
}


class Zombie extends Character{
    constructor(name, type) {
        super(name, type, 40, 10);
      }
}



const B1 = new Bowman("Ashe", "Bowman");
// let B2 = new Bowman("Varus", "Bowman");
 
// let S1 = new Swordsman("Yasuo", "Swordsman");
// let S2 = new Swordsman("Ione", "Swordsman");

// let M1 = new Magician("Ahri", "Magician");
// let M2 = new Magician("Nami", "Magician");

// let D1 = new Daemon("K.zix", "Daemon");
// let D2 = new Daemon("Evelynn", "Daemon");

// let U1 = new Undead("Trinda", "Undead");
// let U2 = new Undead("Mundo", "Undead");

// let Z1 = new Zombie("Sion", "Zombie");
// let Z2 = new Zombie("Teemo", "Zombie");

console.log(B1);
B1.damage(25);
B1.damage(25);
B1.damage(25);
B1.damage(25);
console.log(B1);
// S1.damage(25);
B1.levelUp();
console.log(B1);

