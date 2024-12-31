const express = require('express');
const app = express();
const cors=require("cors")
app.use(cors())
const port = 3000;

app.get('/sum', (req, res) => {
    const a = parseFloat(req.query.a); 
    const b = parseFloat(req.query.b); 

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid query parameters. Please provide valid numbers for a and b.' });
    }
    const sum = a + b;

    res.json({ sum });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
