var Twitter = require('twitter');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =require('cors');
var jsonfile = require('jsonfile');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var file ='tree.json';


var client = new Twitter({
    consumer_key: ' zuHZjRaOxD9SFl0vHuEt0ojDW',
    consumer_secret: '  rZVW9fJKQb6lX6S4UfBDOVTRzq2tqpSKmD3XyjRGUPW5k6dcrX',
    access_token_key: '  1329089202-OkrtezvKa7CuwnB4TJPy5nsrC8EbC95SIbSSYlA',
    access_token_secret: '  xfS88TFT7TGXK1i6wkLiBPMn8r0pfEnKGdnPvkljsTidg'
});

var params = {screen_name: 'seshusai95', count :"20"};
client.get('followers/list', params, function(error, tweets, response) {
    if (!error) {
        console.log("received data");
        var tweets1= [];
        for(i=0; i<tweets.users.length; i++){
            var obj = {
                name : tweets.users[i].name,
                friends_count : tweets.users[i].friends_count
            };
            tweets1.push(obj);
        }
        console.log(tweets1);
    }
    jsonfile.writeFile(file, tweets1, function (err) {
        console.error(err)
    })

});