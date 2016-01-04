var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: 'dreamguideservice@hotmail.com',
        pass: 'Dreamguide123*'
    }
});
var db = mongoose.connect('mongodb://115.28.86.184:27017/dreamguide');
var Schema = mongoose.Schema;
var inputSchema = new Schema({
    createdTime: Date,
    applyDegree: String,
    applyMajor: String,
    fulltime: Number,
    gpa: Number,
    gre: Number,
    internship: Number,
    patent: Number,
    publication: Number,
    tofel: Number,
    undergradSchool: String
});

var eselection = mongoose.model('eselection', inputSchema);

//for future use, different env
var port = process.env.PORT || 80;

    //service: 'QQex',
    //auth: {
    //    //user: 'dreamguide',
    //    //pass: 'abc.123'
    //}

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
        from: 'dreamguideservice@hotmail.com', // sender address
        to: req.body.to, // list of receivers
        subject: 'Dreamguide平台，有新的导师/学生注册', // Subject line
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
            //res.status(500).send('Something broke!');
            res.send('Something broke!');
        } else {
            contents = data;
            res.end("1");
        }
    });
});

app.post('/tools/eselection/inputquery',function(req,res){
    var input = req.body.input;

    var newInput = new eselection({
        createdTime: new Date(),
        applyDegree: input.applyDegree || "",
        applyMajor: input.applyMajor || "",
        fulltime: input.fulltime || 0,
        gpa: input.gpa || 3,
        gre: input.gre || 280,
        internship: input.internship || 0,
        patent: input.patent || 0,
        publication: input.publication || 0,
        tofel: input.tofel || 0,
        undergradSchool: input.undergradSchool || ""
    });
    // save the user
    newInput.save(function(err, data) {
        if (err) return console.error(err);
        console.log(data);
        //mongoose.connection.close(function () {
        //            console.log('Mongoose connection disconnected');
        //        });
    });

    //mongoose.disconnect();
    //mongoose.connection.close();
    res.end("yes");
});

app.listen(port);

console.log('Listening on port 80');
