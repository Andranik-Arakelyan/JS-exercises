/* Exercise 1. University
Create a class named University.

● It should contain two properties

○ teachers ([] as default)
○ students ([] as default)

● It should contain 3 methods

○ addMember(member
○ removeMember(member)
○ startLesson() (description below)

For members you should create two classes, Teacher and Student which will be inherited
from the class UniversityMember.
Members should contain 4 properties
● name
● age
● role
● energy (24 as default)
And one method named info() which will return all 4 properties of it.
After calling the University class startLesson() method, students get -2 of energy
and teachers get -5 of energy. */

const ROLES = {
    teacher: "teacher",
    student: "student"  
};

class University{
    constructor() {
        this.teachers = [];
        this.students = [];
    }
    
    addMember(member) {

        if (member.role === 'teacher'){
            this.teachers.push(member);
        } else if (member.role === 'student'){
            this.students.push(member);
        }
    }

    removeMember(member) {

        if (member.role === 'teacher'){
            this.teachers = this.teachers.filter((item) => item !== member);
        } else if (member.role === 'student'){
            this.students = this.students.filter((item) => item !== member);
        }
    }

    startLesson() {
        console.log("Lesson started");
        this.teachers.forEach((item) => item.energy -= 5);
        this.students.forEach((item) => item.energy -= 2);
    }
}

class UniversityMember{
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = 24;
    }

    info() {
        console.log(`Name: ${this.name}, Age: ${this.age},  Role: ${this.role}, Energy: ${this.energy}`);
    }
}

class Teacher extends UniversityMember{
    constructor(name, age){
        super(name, age, ROLES.teacher);
    }
}

class Student extends UniversityMember{
    constructor(name, age){
        super(name, age, ROLES.student);
    }
}


const T2 = new Teacher('Movsisyan', 54);
const S1 = new Student('Badalyan', 24);
const S2 = new Student('Barnjyan', 25);
const T1 = new Teacher('Darbinyan', 57);

const ysu = new University();

ysu.addMember(T1);
ysu.addMember(T2);
ysu.addMember(S1);
ysu.addMember(S2);
console.log(ysu);
ysu.removeMember(T1);
console.log(ysu);
ysu.startLesson();
ysu.startLesson();
console.log(ysu);
T2.info();