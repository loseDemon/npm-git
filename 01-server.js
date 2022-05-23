const express = require('express')
const loadsh = require('loadsh');
const app = express()

app.get('/', function(req, res) {
    res.send('<h1>Hello World,welcome to express</h1>');

})

app.listen(3000);