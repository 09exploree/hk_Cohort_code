const express = require("express");

function calculateSum(a, b) {
  return a + b;
}

const app = express();

app.get("/", function (req, res) {
  const a = parseInt(req.query.a); 
  const b = parseInt(req.query.b);
  const ans = calculateSum(10, 20);
  res.send(`The sum is: ${ans}`);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
