var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:true});
var maxNum;
var gameNumber;

app.use(express.static('public'));

app.listen(1776, function(){
  console.log('Listening on port 1776');
}); // end app listen

var rand = function(maxNum){
  return parseInt(Math.random() * maxNum) + 1;
}; // end rand

var calcDifference = function(array){
  console.log('in calcDifference. gameNumber:', gameNumber);
  for (var i = 0; i < array.length; i++) {
    if(array[i].guess == gameNumber) {
      array[i].difference = 'match';
      console.log(array[i].name + ' wins!');
    } else if (array[i].guess < gameNumber) {
      array[i].difference = 'low';
    } else if (array[i].guess > gameNumber) {
      array[i].difference = 'high';
    } // end else/if
  } // end for
}; // end calcDifference

app.post('/postMax', urlEncodedParser, function(req, res){
  console.log('get Max req.body:',req.body);
  res.send(req.body);
  maxNum = req.body.num;
  gameNumber = rand(maxNum);
  console.log('Max number:', maxNum);
  console.log('Game number:', gameNumber);
}); // end getMax post

app.post('/postInputs', urlEncodedParser, function(req, res){
  var playersArray = req.body.players;
  console.log('post Inputs req.body.players:',playersArray);
  //calculate and set the difference property of each player in req.body.players
  calcDifference(playersArray);
  res.send(playersArray);
}); // end postInput post
