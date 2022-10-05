// pop()


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

/* 7. Create a function that is receiving an array and returns
 reversed one using pop() */

function reverseArr(arr) {
    const clone = [...arr];
    return arr.reduce(function(aggr, item, i){
        aggr[i] = clone.pop();
        return aggr;
    }, []);
}


console.log(reverseArr(employees));


// 8. Create a function that is receiving a sting argument and checks
// if it is a palindrome using pop()


function checkPolindrome(str) {
    let splitStr = str.split("");
    let clone = [...splitStr];
    let reversedStr = splitStr.reduce(function(aggr, item, i){
        aggr[i] = clone.pop();
        return aggr;
    }, []).join("");
    
    return reversedStr === str;
        
    
}

console.log(checkPolindrome("AbbcdbA"));


// 9. * Create a custom Array.prototype.myPop should work similarly to
// Array.prototype.pop


// Array.prototype.myPop = function(){
//     if(this.length) {
//         let last = this.at(-1);
//         this.length --;
//         return last;
//     }
// }


Array.prototype.myPop = function(){

    if(this.length) {
       return this.splice(this.length - 1, 1)[0];
    }
}


let ar = [1, 2, 3];
console.log(ar.myPop(), ar);
