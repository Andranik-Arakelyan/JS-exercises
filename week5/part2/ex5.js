/* Exercise 5. OOP Structure
Let's imagine that we have the following classes
● City
● Building
● Hospital
● PoliceDepartment
● Car
● PoliceCar
● AmbulanceCar
Please decide on the inheritance hierarchy.
You have to decide which class will be a parent class and which should
be a child class by correctly extending classes from each other.
Example:
PoliceCar extends Car {...}
Also please implement the following conditions.
Condition 1.
The City has many buildings. It may be an array property of the City class named
buildings. It can include different Objects of the Building type
Example:
const nairiHospital = new Hospital();
...
const erebuniHospital = new Hospital();
...
const centralPoliceDepartment = new PoliceDepartment()
city.buildings = [nairiHospital, erebuniHospital,
centralPoliceDepartment]
Condition 2.
Is similar to Condition 1. Buildings can have many cars.
For example, a Hospital may have 10 AmbulanceCars or a police department may
have police cars. */


class City{
    constructor(name){
        this.name = name;
        this.buildings = [];
    }
    addBuilding(building) {
        this.buildings.push(building);
    }
}


class Building{
    constructor(name) {
        this.name = name;
        this.cars = [];
    }
    addcar(car) {
        this.cars.push(car);
    }
}


class Hospital extends Building{

    addcar(car) {
        if(car instanceof AmbulanceCar) {
            super.addcar(car);
        } else { 
            console.log("Hospital can only have ambulance cars")
        }
    }
    
}


class PoliceDepartment extends Building{
    addcar(car) {
        if(car instanceof PoliceCar) {
            super.addcar(car);
        } else { 
            console.log("Police Department can only have police cars")
        }
    }
}


class Car{
    constructor(name) {
        this.name = name;
    }
}


class PoliceCar extends Car{

}


class AmbulanceCar extends Car{

}


const yere1 = new City("Yerevan");

const nairi = new Hospital("Nairi");

const shengavitPolice = new PoliceDepartment("Shengavit");

const shtap = new AmbulanceCar("Shtap ognutyun");

const corolla = new PoliceCar("Gayishnik");

yere1.addBuilding(nairi);
yere1.addBuilding(shengavitPolice)
nairi.addcar(shtap);
nairi.addcar(corolla);


shengavitPolice.addcar(shtap);
shengavitPolice.addcar(corolla);

console.log(yere1);

// const ponchik = new Building("Ponchikanoc");

// const araqich = new Car("araqich");

// ponchik.addcar(araqich);

// console.log(ponchik);