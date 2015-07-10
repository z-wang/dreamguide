var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var maxAge  = 31557600000;
var fs = require('fs');

app.use(express.compress());
app.use(express.bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/app' ));
app.use('/bower_components', express.static(__dirname + '/bower_components' ));

app.get('/*', function(req,res)
{
    res.sendfile(__dirname + '/app/index.html');
});

app.post('/img/upLoad',function(req,res){
    //console.log(req.files);
    //fs.readFile('/var/folders/v8/kd9qkk1s4kb8rcgxz51t148h0000gn/T/9878a8d30108ce7d1dbbf9a088aebeba', {encoding: 'utf-8'}, function(err,data){
    //    if (!err){
    //        var str = data;
    //        console.log(str.length);
    //        //response.writeHead(200, {'Content-Type': 'text/html'});
    //        //response.write(data);
    //        //response.end();
    //    }else{
    //        console.log(err);
    //    }
    //
    //});
    //console.log(req.body.msg);
    var message = req.body.msg;
    var filename = req.body.name;
    var path = "tmp/";
    fs.writeFile(path+filename, message, function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });

    res.end("yes");
});

app.post('/img/downLoad',function(req, res){

    res.send("yes");
});

app.listen(10100);

console.log('Listening on port 10100');
