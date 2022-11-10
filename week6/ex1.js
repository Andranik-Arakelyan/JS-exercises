// Create a function named myTimeout, which takes two parameters, a callback function
// and an interval duration(milliseconds). After calling the myTimeout function, the callback
// function must be executed after duration time has passed.
// Note:
// Don’t use the setTimeout method


function myTimeout(cb, ms){
    const starttime = new Date().getTime();
    while(true) {
        if(new Date().getTime() - starttime >= ms) {
            break;
        }
    }
    cb();
}


myTimeout(() => console.log("hi"), 3000);
