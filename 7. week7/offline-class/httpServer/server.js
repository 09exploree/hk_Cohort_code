// Import the required module
const express = require('express');
const cors=require("cors")
const app = express();
app.use(cors())
const PORT = 3000;

function getRandomInt(min,max){
   return Math.floor(Math.random() * (max-min+1))+min;
}

app.get('/', (req, res) => {
    const response = {
        network: getRandomInt(0,10),
        jobs: getRandomInt(0,10),
        messaging: getRandomInt(0,10),
        notifications: getRandomInt(0,10)
    };
    res.json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
