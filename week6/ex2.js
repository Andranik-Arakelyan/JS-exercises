/* Exercise 2
Create a function named squarePromise, that takes a promise that resolves with a
number or a string. Function should return a promise such that:
● If the input promise resolves with a number, the output promise resolves with the
square of that number.
● If the input promise resolves with a string that we can turn into a number (like
"1234"), the output promise resolves with the square of that number (1522756 in
this example)
● If the input promise resolves with a string that we cannot turn into a number (like
"asdf"), then we reject with a message like "Cannot convert 'asdf' to a
number!"
● If the input promise rejects with an error, the output promise rejects with the same
error */


// let promise1 = Promise.reject(new Error("test error"));
let promise2 = new Promise((resolve) => resolve("8as"));
let promise3 = new Promise((resolve) => resolve("  12 "));


function squarePromise(promise) {
    return new Promise(function(res, rej) {
        promise.then((result) => {
            if (typeof result === "number") {
                res(result ** 2);
            } else if (typeof result === "string" && !isNaN(+result)) {
                res((+result) ** 2);
            } else if (typeof result === "string" && isNaN(+result)) {
                rej(`Cannot convert ${result} to a number!`);
            }
        }).catch((error) => rej(error));
    }); 
}

squarePromise(promise2).then((result) => console.log(result, "Success")).catch((err) => console.log(err, "Error"));
