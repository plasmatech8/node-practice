const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const Joi = require('joi')

// App + Middleware
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static'))); // Serve static/* folder under public/*
app.use(bodyParser.urlencoded({extended: false})); //

// Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.post('/', (req, res)=>{
    console.log(req.body);
    // Form validation
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(5).max(10).required()
    });
    Joi.validate(req.body, schema, (err, result)=>{
        if(err){
            res.send(err.details[0].message);
        }
    });
    // Database works here
    // ...
    // Send response
    res.json({success: true});
});

// Serve
app.listen(3000);