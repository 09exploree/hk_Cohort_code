const express = require("express");
const app = express();

function userValidator(username, password) {
    if (username !== "ahmad" || password !== "pass") {
        return false;
    }
    return true;
}

function kidneyValidator(kidneyId) {
    if (kidneyId !== 1 && kidneyId !== 2) {
        return false;
    }
    return true;
}

app.get("/health-checkup", function (req, res) {
    const kidneyId = parseInt(req.query.kidneyId); 
    const username = req.headers.username; 
    const  password = req.headers.password; 

    if (!userValidator(username, password)) {
        res.status(403).json({
            msg: "User does not exist"
        });
        return;
    }

    if (!kidneyValidator(kidneyId)) {
        res.status(403).json({
            msg: "Wrong input"
        });
        return;
    }

    res.send("Your kidney is working fine");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
