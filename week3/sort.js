// sort()
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
// 24. Using sort, Write a JavaScript function to get the max
// element of an array of numbers

function maxElement(arr) {
    arr.sort((a, b) => a - b);
    return (arr.at(- 1));
}

let myArr = [1, 5, -4, 2];
console.log(maxElement(myArr));




// 25. Using sort, Write a JavaScript function to get the min
// element of an array of numbers

function minElement(arr) {
    arr.sort((a, b) => a - b);
    return (arr[0]);
}

let Arr = [1, 5, -4, 2];
console.log(minElement(Arr));



// 26. Using sort, Write a JavaScript function to sort the
// collection of employees by their name

function sortEmployeesByName(employees) {
    let sortedNames = employees.map(item => item.firstName).sort();

    return sortedNames.reduce(function(aggr, item){
        for(let i = 0; i < employees.length; i++){

            if(employees[i].firstName === item) {
                aggr.push(employees[i]);
            }
        }

        return aggr;
   
    }, []);
}


console.log(sortEmployeesByName(employees));


// 27. *** Create a custom Array.prototype.mySort should work
// similarly to Array.prototype.sort


// To be continued...