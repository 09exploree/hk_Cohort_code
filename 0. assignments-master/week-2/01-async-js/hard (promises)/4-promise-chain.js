/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited ${t} milliseconds in wait1`);
        }, t);
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited ${t} milliseconds in wait2`);
        }, t);
    });
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited ${t} milliseconds in wait3`);
        }, t);
    });
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now(); // Capture the start time

    // Sequentially chain the promises
    return wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            const endTime = Date.now(); // Capture the end time
            const timeTaken = endTime - startTime; // Calculate total time taken
            return timeTaken; // Return the total time
        });
}

// Example usage
calculateTime(1000, 2000, 3000).then((time) => {
    console.log(`Total time taken in sequential execution: ${time} milliseconds`);
});

module.exports = calculateTime;
