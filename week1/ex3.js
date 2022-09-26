/* Exercise 3
From the given array of numbers create two arrays one containing only odd and the other
only even numbers.
Տրված թվային զանգվածից ստանալ երկու զանգվածներ, որոնցից մեկը կպարունակի
միայն կենտ իսկ մյուսը միայն զույգ թվեր: */

function evenOrOdd(arr) {
    let evens = [];
    let odds = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2) {
            odds.push(arr[i]);
        } else {
            evens.push(arr[i]);
        }
    }
    console.log(evens, "\n", odds);
}


evenOrOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);