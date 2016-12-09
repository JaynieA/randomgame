console.log("Sourced");

var players = [];
//constructor function
var Player = function(guess){
  this.guess = guess;
  this.difference = undefined;
  players.push(this);
};
//make player objects
var playerOne = new Player();
var playerTwo = new Player();
var playerThree = new Player();
var playerFour = new Player();

var postMaxNum = function(num) {
  $.ajax({
    type: "POST",
    data: {num: num},
    url: '/getMax',
    success: function(response) {
      console.log('postMaxNum ajax success');
    },
    error: function(){
      console.log('get max ajax error');
    }
  });
}; // end postMaxNum

var postInputs = function(players) {
  $.ajax({
    type: "POST",
    data: {players},
    url: '/postInputs',
    success: function(response) {
      console.log('postInputs ajax success');
    },
    error: function(){
      console.log('get max ajax error');
    }
  });
}; // end postMaxNum

$(document).ready(function(){
  console.log('JQ');
  //event listeners
  $('#startButton').on('click', function(){
    $('#inputMode').hide();
    $('#playMode').show();
    console.log('start clicked');
    var maxNum = $('#maxNumIn').val();
    console.log(maxNum);
    postMaxNum(maxNum);
  }); // end #startButtonnp
  $('#submit').on('click', function(){
    console.log('submit clicked');
    // var inputs = {
    //   one:$('#playerOne').val(),
    //   two:$('#playerTwo').val(),
    //   three:$('#playerThree').val(),
    //   four:$('#playerFour').val()
    // };
    //create player objects
    // var playerOne = new Player($('#playerOne').val());
    playerOne.guess = $('#playerOne').val();
    playerTwo.guess = $('#playerTwo').val();
    playerThree.guess = $('#playerThree').val();
    playerFour.guess = $('#playerFour').val();
    console.log(playerOne, playerTwo, playerThree, playerFour);
    //send input array as an object to the server
    console.log(players);
    postInputs(players);
    $('input').val('');
  }); // end #startButtonnp

});
