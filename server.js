var express = require('express');
var app     = express();
var maxAge  = 31557600000;

app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/app' ));
app.use('/bower_components', express.static(__dirname + '/bower_components' ));

app.get('/*', function(req,res)
{
    res.sendfile(__dirname + '/app/index.html');
});

app.post('/img/upLoad',function(req,res){
    console.log(req.files);
    res.end("yes");
});

app.listen(10100);

console.log('Listening on port 10100');
