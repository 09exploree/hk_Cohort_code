/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// const { resolve } = require("dns");

function wait1(t) {
    return new Promise( (resolve,reject) =>{
      setTimeout( ()=>{
        isTrue=true;
        if(isTrue) {resolve("The wait1 is executed");}
        else{ reject("The wait1 is pending");}
      },t)
    });
}

function wait2(t) {
    return new Promise ((resolve,reject)=>{
      setTimeout( ()=>{
        isTrue=true;
        if(isTrue) {resolve("The wait2 is executed");}
        else{ reject("The wait2 is pending");}
      },t)
    })

}

function wait3(t) {
    return new Promise( (resolve,reject)=>{
      setTimeout( ()=>{
        isTrue=true;
        if(isTrue) {resolve("The wait3 is executed");}
        else{ reject("The wait3 is pending");}
      },t)
    });

}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now(); 

    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
        const endTime = Date.now();
        const timeTaken = endTime - startTime; 
        return timeTaken;
    });
}
calculateTime(2000, 1500, 1000).then((time) => {
    console.log(`Total time taken: ${time} milliseconds`);
});

module.exports = calculateTime;
