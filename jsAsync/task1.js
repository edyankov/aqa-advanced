// Task 1: Displaying text after a specified number of milliseconds

function logText(text) {
    console.log(text);
}

// setTimeout accepts the 3rd and following arguments as parameters for the callback
// (the same style shown in timers.js during the lesson)
const delayedLog = (text, ms) => {
    setTimeout(logText, ms, text);
};

delayedLog('Hello after 1 second', 1000);
delayedLog('Hello after 2 seconds', 2000);
delayedLog('Hello after 3 seconds', 3000);