const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// This is your Backend "Database" (Mock for the project)
let users = []; 

// API for Signup
app.post('/api/signup', (req, res) => {
    users.push(req.body);
    res.status(201).send({ message: "User registered on Backend!" });
});

// API for Login
app.post('/api/login', (req, res) => {
    const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
    if (user) {
        res.send({ success: true, token: "session_123" });
    } else {
        res.status(401).send({ success: false, message: "Invalid credentials" });
    }
});

app.listen(5000, () => console.log('Backend running on port 5000'));