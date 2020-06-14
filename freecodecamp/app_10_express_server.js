const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const app = express();

// Middleware
app.use('/public', express.static(path.join(__dirname, 'static'))); // Serve static/* folder under public/*
app.use(bodyParser.urlencoded({extended: false})); //

// Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.post('/', (req, res)=>{
    console.log(req.body);
    // database works here
    res.json({success: true})
});

// Serve
app.listen(3000);