// Exercise 1. Create an infinite loop
// Create an infinite loop that will not stop the execution of other JS
// instructions.


function infinity() {
    while (true) {
        console.log("im an infinite loop");
    }
}

setTimeout(infinity, 2200);
console.log('I am before an infinite loop');





