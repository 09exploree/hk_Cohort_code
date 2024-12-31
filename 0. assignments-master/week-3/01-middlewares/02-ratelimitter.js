const express = require('express');
const app = express();

let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
    const userId = req.headers['user-id']; 

    if (!userId) {
        return res.status(400).json({ msg: 'User ID is required in the header' });
    }

    if (!numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = 0;
    }

    numberOfRequestsForUser[userId]++;

    if (numberOfRequestsForUser[userId] > 5) {
        return res.status(404).json({ msg: 'Rate limit exceeded' });
    }

    next();
});

app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
