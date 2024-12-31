// ================== without using middlewares===============
/*const express = require("express");
const app = express();

function isOldEnough(age) {
  if (age >= 14) return true;
  else return false;
}

// Route handler for /ride1
app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully ridden the ride1",
    });
  } else {
    res.status(411).json({
      msg: "Sorry, you are not of age yet",
    });
  }
});

// Route handler for /ride2
app.get("/ride2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully ridden the ride2",
    });
  } else {
    res.status(411).json({
      msg: "Sorry, you are not of age yet",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
*/
// ===================== using middlewares ============================
const express = require("express");
const app = express();

function isOldEnoughMiddleWare(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry, you are not of age yet",
    });
  }
}
app.use(isOldEnoughMiddleWare)
app.get("/ride1",  function (req, res) {
  res.json({
    msg: "You have successfully ridden ride1",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "You have successfully ridden ride2",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


// app.get("/ride1", isOldEnoughMiddleWare, function (req, res) {
//   res.json({
//     msg: "You have successfully ridden ride1",
//   });
// });

// app.get("/ride2", isOldEnoughMiddleWare, function (req, res) {
//   res.json({
//     msg: "You have successfully ridden ride2",
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

