/* Task 1
Create a method in the Person class which returns how another person's age compares.
Given the instances p1, p2 and p3, which will be initialized with the attributes name and
age, return a sentence in the following format:
{other person name} is {older than / younger than/ the same age as} me.
Example:
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."
p2.compareAge(p1) ➞ "Samuel is younger than me."
p1.compareAge(p3) ➞ "Lily is the same age as me." */

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }
//     compareAge(obj) {
//         if(obj.age > this.age) {
//             console.log(`${obj.name} is older than me`)
//         } else if(obj.age < this.age) {
//             console.log(`${this.name} is younger than me`)
//         } else {
//             console.log(`${this.name} is the same age as me`)
//         }
//     }
// }

// p1 = new Person("Samuel", 24)
// p2 = new Person("Joel", 36)
// p3 = new Person("Lily", 24)
// p1.compareAge(p2)
// p2.compareAge(p1)
// p1.compareAge(p3)

/* Task 2
Create a class named User and create a way to check the number of users (number of
instances) that were created, so that the value can be accessed as a class attribute.
Example:
u1 = new User("johnsmith10")
User.userCount ➞ 1
u2 = new User("marysue1989")
User.userCount ➞ 2
u3 = new User("milan_rodrick")
User.userCount ➞ 3 */

// class User {
//     constructor(name, age){
//         this.name = name
//     }
//     static userCount() {
        
//     } 
// }


/* Task 3
Create a class named University.
● It should contain two properties
○ teachers ([] as default)
○ students ([] as default)
● It should contain 3 methods
○addMember(member
○removeMember(member)
○startLesson() (description below)
For members you should create two classes, Teacher and Student which will be inherited
from the class UniversityMember.
Members should contain 4 properties
●name
●age
●role
●energy (24 as default)
And one method named info() which will return all 4 properties of it.
After calling the University class startLesson() method students get -2 of energy
and teachers get -5 of energy. */

class University {
    constructor() {
        this.teachers = [];
        this.students = [];
    }
    addMember(obj) {
        if(obj.role === "teacher"){
            this.teachers.push(obj);
        } else if(obj.role === "student"){
            this.students.push(obj);
        }
    }

    removeMember(obj) {
        if(obj.role === "teacher") {
            this.teachers = this.teachers.filter(function(item) {
                return item !== obj; 
            })
        } else if(obj.role === "student") {
            this.students = this.students.filter(function(item) {
                return item !== obj;
        })
        }
    }

    startLesson() {
        this.teachers.forEach(function(item){
            item.energy -= 5;
        })
        this.students.forEach(function(item){
            item.energy -= 2;
        })
    }
}

class UniversityMember {
    constructor(name, age, role, energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy
    }
    info() {
        console.log(`${this.name}, ${this.age}, ${this.role}, ${this.energy}`);
    }
}

class Teachers extends UniversityMember{

}

class Students extends UniversityMember{

}

let Anna = new Teachers("Anna", 29, "teacher", 24);
let Mike = new Students("Mike", 20, "student", 24);
let Susan = new Students("Susan", 19, "student", 24);
let Jhon = new Teachers("Jhon", 34, "teacher", 24);

let NPUA = new University();

NPUA.addMember(Anna);
NPUA.addMember(Mike);
NPUA.addMember(Susan);
NPUA.addMember(Jhon);
console.log(NPUA);
NPUA.removeMember(Mike);
NPUA.startLesson();

console.log(NPUA);

Anna.info();
