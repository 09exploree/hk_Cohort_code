/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        while (Date.now() - start < milliseconds) {
        }
        resolve();
    });
}

sleep(2000).then(() => {
    console.log("The wait is successfully executed (busy wait)");
});

module.exports = sleep;
