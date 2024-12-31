// const fs = require("fs");
// const path = require("path");  

// const filePath = path.join("C:\\Users\\shkha\\OneDrive\\Desktop\\Cohort 2.o", "assignments-master", "week-2", "01-async-js", "easy", "3-a.txt");

// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


// =================================  Synchronised Reading  =========================================

const fs = require('fs');
const path = require('path');

const filePath = path.join("C:\\Users\\shkha\\OneDrive\\Desktop\\Cohort 2.o", "assignments-master", "week-2", "01-async-js", "easy", "3-a.txt");

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log("File content:", data);
} catch (err) {
    console.error("Error reading file:", err);
}
