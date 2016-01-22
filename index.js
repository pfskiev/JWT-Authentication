var express = require('express');
var faker = require('faker');
var cors = require('cors');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(cors());

app.get('/user', function(req, res){
    var user = faker.Helpers.createCard();
    res.json(user)

});

app.listen(3000, function(){
    console.log('Listening on port: 3000')
});
