/* Task 1
Write a class called Name and create the following properties: firstName and lastName.
● A method called fullname which returns the first and last names.
● A method called initials which returns the first letters of the first and last name.
Put a . between the two letters. */


class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get initials() {
        return `${this.firstName[0]}.${this.lastName[0]}`;
    }
}


const person = new Name('David', 'Balan');
console.log(person.fullName);
console.log(person.initials);