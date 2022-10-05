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


/* 1. Create a function that is receiving a collection of employees
    and using toString() returns a string with comma-separated full
    names */



// function getFullNames(employees){
//     return employees.reduce(function(aggr, item){
//         return `${aggr}${item.firstName} ${item.lastName}, `;
//     }, "").slice(0, -2);
// }


function getFullNames(employees){
    return employees.reduce(function(aggr, item){
        aggr.push(' ' + item.firstName + " " + item.lastName);
        return aggr;
    }, []).toString().slice(1);
}


console.log(getFullNames(employees));




/* 2. Create a function that is receiving a collection of employees
and using toString() returns a string with comma-separated
`email: salary` with the following format
hloyley5@uol.com.br: $1368.00, ldoige2@mashable.com: $1873.56
*/


// function getEmailSalary(employees){
//     return employees.reduce(function(aggr, item){
//         return `${aggr}${item.email}: ${item.salary}, `;
//     }, "").slice(0, -2);
// }


function getEmailSalary(employees){
    return employees.reduce(function(aggr, item){
        aggr.push(' ' + item.email + ": " + item.salary);
        return aggr;
    }, []).toString().slice(1);
}


console.log(getEmailSalary(employees));



/* 3. Create a custom Array.prototype.myToString it should work
similarly to Array.prototype.toString
*/


Array.prototype.myToString = function(){
    return this.join();
}

console.log([1,undefined, true, "hi", 3].myToString());













