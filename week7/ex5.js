// Exercise 5
// Create a function that receives an object and returns the clone of it.  The returned object
// should have the same properties as the original one.
// This exercise has no one correct solution. Feel free to research some resources while
// solving this exercise.
// Note:
// let a = {}
// let b = myClone(a)
// a === b // should output false



function copyArray(arr){
    let clonedArr = [];
    for (let item of arr) {
        if (typeof item !== 'object'){
            clonedArr.push(item);
        } else if (!Array.isArray(item))   {
            clonedArr.push(myClone(item));
        } else {
            clonedArr.push(copyArray(item))
        }
    }

    return clonedArr;
}


function myClone(obj) {
    let clonedObj = {};
    for(let key in obj) {
        if(typeof(obj[key]) !== 'object') {
            clonedObj[key] = obj[key];
        } else if (Array.isArray(obj[key])) {
            clonedObj[key] = copyArray(obj[key]);
        } else {
            clonedObj[key] = myClone(obj[key]);
        }
    }

    return clonedObj;
}


let a = {
    name: "Frodo",
    lastname: "Beggins",
    foods: {
        tea: "karkade",
        rom: "Bacardi",
        coffee: {name: "capucino"},
        fastfoods: ["pizza", "burger", "brokoli soup"]
    },
    friends: ["Gendalf", "Boromir", ['kili', 'fili', ['bofur'], ['Ria', {age:28, sisters: ['Nia', 'Sia', 'Lia']}]], { hobbits: ['Sam','Alex']}]
}

let b = myClone(a)
console.log(b);

console.log(b.friends[2][2]);
console.log(b.friends[2][3]);

// console.log(a.friends === b.friends);
// console.log(a.foods.coffee === b.foods.coffee);
// console.log(a.foods.fastfoods === b.foods.fastfoods);
// console.log(a.friends[2] === b.friends[2]);
// console.log(a.friends[3] === b.friends[3]);
// console.log(a.friends[3].hobbits === b.friends[3].hobbits);
// console.log(a.friends[2][2] === b.friends[2][2]);
// console.log(a.friends[2][3] === b.friends[2][3]);
// console.log(a.friends[2][3][1] === b.friends[2][2][1]);
// console.log(a.friends[2][3][1].sisters === b.friends[2][3][1].sisters);