var express = require('express');
var faker = require('faker');
var cors = require('cors');


var app = express();

app.use(express.static(__dirname + '/'));


app.listen(3000, function(){
    console.log('Listening on port: 3000')
})
