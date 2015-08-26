var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'test.dreamguide@gmail.com',
        pass: 'testdreamguide'
    }
    //service: 'QQex',
    //auth: {
    //    //user: 'dreamguide',
    //    //pass: 'abc.123'
    //}
});
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

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}

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
    //});
    //console.log(req.body.msg);
    //var message = req.body.msg;
    //var message = decodeBase64Image(req.body.msg).data;
    console.log(req.body.msg);
    var message = req.body.msg.replace(/^data:image\/png;base64,/, "");
    var fileName = req.body.name;
    var path = "app/image/avatar/";
    fs.writeFile(path+fileName, message,'base64', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log("show!");
        console.log(data);
    });
    res.end("yes");
});

app.post('/util/sendEmail',function(req, res){
    var mailOptions = {
        from: 'test.dreamguide@gmail.com', // sender address
        to: req.body.to, // list of receivers
        subject: 'Dreamguide平台，有新的导师注册', // Subject line
        text: req.body.content
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
    res.end("ok");
});

app.post('/img/downLoad',function(req, res){
    var fileName = req.body.name;
    var path = "app/image/avatar/";
    var contents = "";
    fs.readFile(path + fileName + ".png", function(err, data){
        if (err) {
            console.log(err);
            res.status(500).send('Something broke!');
        } else {
            contents = data;
            console.log(contents);
            res.end("1");
        }
    });
});

app.listen(80);

console.log('Listening on port 80');
