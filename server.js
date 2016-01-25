var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var eselectionData = require('./data/eselection');
var schoolRank = require('./data/ranks');
var ml = require('machine_learning');

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
//app.use(express.favicon(__dirname + '/app/favicon.ico'));
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
        toefl: input.toefl || 0,
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

var simplePrediction = function(data, result, userData){
    var knn = new ml.KNN({
        data : data,
        result : result
    });

    return knn.predict({
        x : userData,
        k : 9,

        weightf : {type : 'gaussian', sigma : 10.0},
        // default : {type : 'gaussian', sigma : 10.0}
        // {type : 'none'}. weight == 1
        // Or you can use your own weight f
        // weightf : function(distance) {return 1./distance}

        distance : {type : 'euclidean'}
        // default : {type : 'euclidean'}
        // {type : 'pearson'}
        // Or you can use your own distance function
        // distance : function(vecx, vecy) {return Math.abs(dot(vecx,vecy));}
    });
};

//if list number is 5, then 0.2 * 5 = 1 top, 0.5 * 5 = 2 reality, 5 - 1 - 2 = 2 backup  TODO: make it different for different kind of students
var generateSchoolListNumArray = function(listNumber, studentKind, strategy) {
    //listNumber is the total number of a list, studentKind is to decide if student is very good, strategy is to change precentage
    //school distribution should be number 20% in top, 50% in mid, 30% in backup
    var top = Math.round(0.2 * listNumber);
    var backup = Math.round(0.3 * listNumber);
    var reality = listNumber - top - backup;
    return [top, reality, backup];
};

var addSchoolToList = function(listNumberArray, chanceBucket, realityAdjustFunc) {
    //chanceBucket is being edited with student change
    var schoolBucket = {
        top : [],
        reality : [],
        backup : []
    };
    //add to top, only find from low/lowMid, sort with rank file
    for(var i = 0; i < listNumberArray[0]; i++) {

    }

    //add to backup, only find from high and very high, need to make sure good school not in high and very high

    //add to reality, can use realityAdjustFunc change

    return schoolBucket;
};

var adjustSchoolFunc = function(schoolList, rankList){
    var newSchoolList = {
        top : [],
        reality : [],
        backup : []
    };
    //30% 40% 30% -> top reality backup
    var top = 0.3 * rankList.length;
    var reality = 0.4 * rankList.length
    var backup = rankList.length - top - reality;
    var topList = rankList.slice(rankList.length - top, rankList.length);
    var realityList = rankList.slice(backup, backup + reality);
    var backupList = rankList.slice(0, backup);

    //go through top school, change a little bit from experience
    schoolList.backup.map(function(school){
        if(topList.indexOf(school) >= 0 && topList.indexOf(school) > Number(0.7 * topList.length)) {
            newSchoolList.top.push(school);
        } else if(topList.indexOf(school) >= 0) {
            newSchoolList.reality.push(school);
        } else if(realityList.indexOf(school) >= 0 && realityList.indexOf(school) > Number(0.5 * realityList.length)) {
            newSchoolList.reality.push(school);
        } else {
            newSchoolList.backup.push(school);
        }
    });
    schoolList.reality.map(function(school){
        if(topList.indexOf(school) >= 0 && topList.indexOf(school) > Number(0.7 * topList.length)) {
            newSchoolList.top.push(school);
        } else if (backupList.indexOf(school) >= 0 && backupList.indexOf(school) < Number(0.7 * backupList.length)){
            newSchoolList.backup.push(school);
        } else {
            newSchoolList.reality.push(school);
        }
    });
    schoolList.top.map(function(school) {
        if(backupList.indexOf(school) >= 0) {
            newSchoolList.reality.push(school);
            //OR, just throw away
        } else {
            newSchoolList.top.push(school);
        }
    });
    return newSchoolList;
};

var getPredition = function(req,res){
    var inputObj = req.body.input;
    console.log(req.body);
    //generate preprocessed data
    var input = [];
    var results = [];
    var schoolNumber = 8; //todo: change
    var listNumber = 5; //todo: make it a var people can choose, 4/8/12/16
    var schoolListArray = generateSchoolListNumArray(listNumber);

    //todo: remove cross domain
    res.header('Access-Control-Allow-Origin', '*');

    input.push(inputObj.undergradSchool, inputObj.toefl, inputObj.gre, inputObj.gpa);

    //create three bucket: <34%, 56%, >78% means top,reality,backup
    //school distribution should be number 20% in top, 50% in mid, 30% in backup, otherwise you are too good or too bad
    //12%, 34%, 45%, 56%, 78%, 89% success is very low, low, low mid, high mid, low high, very high
    //calculate school distribution shift
    /*
     how to judge if a student is good or improved
     a function get points, compare points:
     6 class, 1,2,3,4,5,6


     if top number more than
     */
    /*
     pick for a list,


     */
    var schoolBucket = {
        top : [],
        reality : [],
        backup : []
    };

    var applicationList = {
        top:[],
        reality:[],
        backup:[]
    };

    var chanceBucket = {
        veryLow : [],
        low : [],
        lowMid : [],
        mid: [],
        highMid : [],
        high : [],
        veryHigh : []
    };
    input = eselectionData.getPreprocessedData(input);
    eselectionData.getSchoolNames.map(function(name) {
        var predict = ( simplePrediction(
            eselectionData.getSchoolDataAndResult(name).data,
            eselectionData.getSchoolDataAndResult(name).result,
            input
        ) * 100 ).toFixed(3);
        results.push({
            name : name,
            prediction: predict
        });

        if (predict <= 12) {
            //schoolBucket.top.push(name);
            chanceBucket.veryLow.push(name);
        } else if (predict > 12 && predict <=34) {
            schoolBucket.top.push(name);
            chanceBucket.low.push(name);
        } else if (predict > 34 && predict <= 45) {
            schoolBucket.top.push(name);
            chanceBucket.lowMid.push(name);
        } else if (predict > 45 && predict <= 56) {
            schoolBucket.reality.push(name);
            chanceBucket.mid.push(name);
        }else if (predict > 56 && predict <= 78) {
            schoolBucket.reality.push(name);
            chanceBucket.highMid.push(name);
        } else if (predict > 78 && predict < 89 ) {
            schoolBucket.backup.push(name);
            chanceBucket.high.push(name);
        } else {
            schoolBucket.backup.push(name);
            chanceBucket.veryHigh.push(name);
        }
        //delete overqualify situation
        //use similar class for ranks file, remove school in chanceBucket with 2 diff of ranks
        //example: a school in low which actually rank highMid, will be move to highMid
        // a school in highMid actually rank in low, dont move.
        //todo:delete this simple concat
        applicationList.top = chanceBucket.low.concat(chanceBucket.lowMid);
        applicationList.reality = chanceBucket.highMid.concat(chanceBucket.high);
        applicationList.backup = chanceBucket.veryHigh;
    });

    //todo: schoolBucketAddjust, need to use rankList;
    schoolBucket = adjustSchoolFunc(schoolBucket, schoolRank.getRankbyMajor('finance').schools);

    //TODO: selection function for chongci, baodi schools here: postDataProcess
    //1. sort results
    function compare(schoolA, schoolB) {
        if (schoolA.prediction < schoolB.prediction)
            return -1;
        else if (schoolA.prediction > schoolB.prediction)
            return 1;
        else
            return 0;
    }
    results.sort(compare);

    var jsonResult = {
        results : results,
        schoolList : schoolBucket,
        chanceList : chanceBucket,
        applicationList : applicationList
    };

    //result.map()
    console.log(jsonResult);
    res.json(jsonResult);
};
//getPredition({body:{input:{undergradSchool:3, toefl:97, gre:310, gpa:3.4}}});
//var schoolList =
//{ top: [ 'MIT', 'University of Maryland' ],
//    reality: [ 'Brandeis University', 'University of Southern California' ],
//    backup:
//    [ 'Tulane University',
//        'Johns Hopkins University',
//        'University at Buffalo',
//        'University of Texas at Austin' ] };
//adjustSchoolFunc(schoolList, schoolRank.getRankbyMajor('finance').schools);

app.post('/tools/eselection/getPredictions', getPredition);

app.listen(port);

console.log('Listening on port 80');
