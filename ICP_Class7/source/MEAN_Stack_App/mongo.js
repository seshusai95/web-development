/**
 * Created by karthik on 7/14/17.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();

var url='mongodb://seshusai:mounika@ds247678.mlab.com:47678/my_database';//1.Modify this url with the credentials of your db name and password.
var ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/create', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        insertDocument(db, req.body, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
});

app.get('/get', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }

        db.collection('books').find().toArray(function(err, result){
            if(err)
            {
                res.write("get Failed");
                res.end();
            }else
            {

                res.send(JSON.stringify(result));
            }
            console.log("Got All Documents");

        });
    });

});

app.get('/delete', function (req, res) {
    alert("1");
    var id = req.query.id;
    MongoClient.connect(url, function(err, db) {
        alert("2");
        if(err) {
            res.write("Failed, Error while connecting to Database");
            res.end();
            alert("3");
        }

        db.collection('books', function(err, books) {
            alert("4");
            books.deleteOne({_id: new mongodb.ObjectID(id)});
            if (err){
                throw err;
            }else{
                alert("5");
                db.close();
                res.end();
            }
        });
    });
    // 2.Connect to MongoDB . Handle the error and write the logic for deleting the desired book
});


app.get('/update/:toBeUpdated_id', function (req, res) {
    //3.connect to MongoDB. Handle the error and write the logic for updating the selected field
});


var insertDocument = function(db, data, callback) {
    db.collection('books').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Inserted a document into the books collection.");
        callback();
    });
};

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});