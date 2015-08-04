var express = require('express');
var http = require('http');
var app = express();


app.set('port', 3000);

app.get('/', function(req, res) {
    res.send('mrc-bim Service');
});

app.get('/defaultValues', function(req, res) {

    var defaultValues = require('./defaultValues.json');
    res.send(defaultValues);
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
