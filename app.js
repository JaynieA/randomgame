var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:true});
var maxNum;
var gameNumber;

app.use(express.static('public'));

app.listen(1776, function(){
  console.log('Listening!');
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
    }
  }
}; // end calcDifference

app.post('/getMax', urlEncodedParser, function(req, res){
  // console.log('/getMax url hit');
  console.log('get Max req.body:',req.body);
  res.send(req.body);
  maxNum = req.body.num;
  gameNumber = rand(maxNum);
  console.log('Max number:', maxNum);
  console.log('Game number:', gameNumber);
}); // end getMax post

app.post('/postInputs', urlEncodedParser, function(req, res){
  // console.log('/postInputs url hit');
  console.log('post Inputs req.body.players:',req.body.players);
  //do logic to figure out differences between guesses and game number (populating the difference property) here
  calcDifference(req.body.players);
  res.send(req.body.players);
}); // end postInput post
