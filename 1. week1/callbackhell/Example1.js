function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 is completed");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 is completed");
        callback();
    }, 2000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 is completed");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 is completed");
        callback();
    }, 1500);
}

// Execute the tasks in sequence
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log("All tasks are completed");
//             });
//         });
//     });
// });
task1( () => {
    task2();
})
