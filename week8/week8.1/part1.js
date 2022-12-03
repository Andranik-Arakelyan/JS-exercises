// 1)
// as you can see toyota2 does not have a logModel function
// borrow that function from toyota1 and call i, so it console.logs "Toyota Rav4"

const toyota1 = {
  model: "Toyota",
  type: "Camry",
  logModel() {
    console.log(this.model, this.type);
  },
};

const toyota2 = {
  model: "Toyota",
  type: "Rav4",
};


// //solution 
toyota1.logModel.call(toyota2);



// 2)
// The following code does not work. Turn it into working code

const flights = {
  flights: [],

  priorityFlights: [],

  scheduleFlight(flight) {
    this.flights.push(flight);
  },

  removeFlight(flight) {
    this.flights = this.flights.filter(flightFilter, this); // thisArg = this, so flightFilter will be called with this=flights
    function flightFilter(f) {
      if (flight === f) {
        return this.priorityFlights.includes(flight); // no access to priorityFlights, added this 
      }
      return true;
    }
  },

  makePriorityFlight(flight) {
    this.priorityFlights.push(flight);
  },
};


flights.scheduleFlight("1");

flights.makePriorityFlight("1");

flights.removeFlight("1");

console.log(flights.flights);





// 3)

// CarConstructor creates cars but what if someone decides to call it without new keyword,
// write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
// new keyword it logs "please call me with new keyword" if not it creates a car

// first solution
function CarConstructor(model, year) {
  if(!new.target) {
    console.log("please call me with new keyword")
  } else {
    this.mode = model;
    this.year = year;
  }
}

// second solution
function CarConstructor(model, year) {
    if(this.constructor === CarConstructor) {
      this.mode = model;
      this.year = year;
    } else {
        console.log("please call me with new keyword");
    }
}

let car1 = new CarConstructor("bmw", 1998);
console.log(car1);

let car2 =  CarConstructor("bmw", 1998);


  
// 4)

// make a new array out of objArr so that every object has the same logName function that is declared below
// use logName function do not create your own

const objArr = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];
const newArr = [];
objArr.forEach((item, i) => {
    newArr[i] = Object.assign({}, item);
    newArr[i].logName = logName;
});

function logName() {

  console.log(this.name);
}

console.log(objArr);
console.log(newArr);