const express = require('express');
const app = express();

// Routes
app.get('/', (req, res)=>{
    res.send('Hello World!')
});
app.get('/example', (req, res)=>{
    res.send('Example')
});
// Dynamic Routes + Query String
app.get('/example/:name/:age', (req, res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send('Hitting example with params: \n'
             + req.params.name + '/'
             + req.params.age)
});
app.listen(3000);
