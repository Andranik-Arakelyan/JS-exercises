//push()

const employees = [
    {
    "firstName": "Arabela",
    "lastName": "Fockes",
    "email": "afockes0@wired.com",
    "salary": "$6.18",
    "isEngineer": true,
    "gender": "Female"
    },
    {
    "firstName": "Bryant",
    "lastName": "Marchi",
    "email": "bmarchi1@theatlantic.com",
    "salary": "$8.05",
    "isEngineer": false,
    "gender": "Male"
    },
    {
    "firstName": "Batholomew",
    "lastName": "Eim",
    "email": "beim2@goodreads.com",
    "salary": "$7.26",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Ritchie",
    "lastName": "Ferreira",
    "email": "rferreira3@booking.com",
    "salary": "$4.07",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Kaylyn",
    "lastName": "Ivain",
    "email": "kivain4@gmpg.org",
    "salary": "$5.89",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Wilhelmina",
    "lastName": "Portigall",
    "email": "wportigall5@plala.or.jp",
    "salary": "$2.06",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Rouvin",
    "lastName": "Gillcrist",
    "email": "rgillcrist6@aol.com",
    "salary": "$7.29",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Flemming",
    "lastName": "Scroggins",
    "email": "fscroggins7@msu.edu",
    "salary": "$7.54",
    "isEngineer": false,
    "gender": "Male"
    },
    {
    "firstName": "Sallee",
    "lastName": "Schlagh",
    "email": "sschlagh8@reuters.com",
    "salary": "$2.24",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Roxine",
    "lastName": "Bedo",
    "email": "rbedo9@whitehouse.gov",
    "salary": "$6.47",
    "isEngineer": false,
    "gender": "Female"
    }
    ];

let employees2 = [
    {
        "firstName": "Sarah",
        "lastName": "Smith",
        "email": "sschlagh8@reuters.com",
        "salary": "$5.24",
        "isEngineer": false,
        "gender": "Female"
        },
        {
        "firstName": "Arya",
        "lastName": "Stark",
        "email": "rbedo9@whitehouse.gov",
        "salary": "$7.47",
        "isEngineer": false,
        "gender": "Female"
        }

    
]


// 10. Create a function that is receiving a number and returns an
// array which is containing all even digits. Use push method

function returnEvenDigitOf(number) {
    evenDigits = [];
    while(number) {
        let lastDigit = number % 10;
        if (!(lastDigit % 2)){
            evenDigits.push(lastDigit);
        } 
        number = Math.trunc(number / 10);
    }
    return evenDigits;
}


console.log(returnEvenDigitOf(1234));


// 11. Create a function that will receive two collections of
// employees and adds the items of the second collection to the
// first collection. Use push method

function addEmployees(arr1, arr2) {
    return arr2.reduce(function(aggr, item){
        aggr.push(item);
        return aggr;
    }, arr1);
}


console.log(addEmployees(employees, employees2));


// 12. * Create a custom Array.prototype.myPush should work
// similarly to Array.prototype.push

Array.prototype.myPush = function(...args) {
    for (let i = 0; i < args.length; i++) {
        this[this.length] = args[i];
    }
    return this.length;
}


let ar = [];
console.log(ar.myPush(5), ar);