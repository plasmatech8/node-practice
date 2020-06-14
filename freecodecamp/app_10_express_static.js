const express = require('express');
const path = require('path')

const app = express();

// Add the static folder as a resource
app.use('/public', express.static(path.join(__dirname, 'static')));

// Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.listen(3000);