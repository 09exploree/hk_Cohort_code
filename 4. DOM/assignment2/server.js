const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all requests
app.use(cors());

function simple_intrest(principle, rate, time) {
    const ans = (principle * rate * time) / 100;
    return ans;
}

app.get("/simple-intrest", function(req, res) {
    const principle = Number(req.query.principle);
    const rate = Number(req.query.rate);
    const time = Number(req.query.time);

    try {
        const pi = simple_intrest(principle, rate, time);
        res.status(200).json({
            pi,
            msg: "success"
        });
    } catch (error) {
        res.json({
            msg: "Invalid input"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
