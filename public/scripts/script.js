console.log("Sourced");

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

var inputs = [];
//constructor function
var Player = function(guess){
  this.guess = guess;
  this.difference = undefined;
  inputs.push(this);
};

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
    var playerOne = new Player($('#playerOne').val());
    var playerTwo = new Player($('#playerTwo').val());
    var playerThree = new Player($('#playerThree').val());
    var playerFour = new Player($('#playerFour').val());
    console.log(playerOne);
    //send input array as an object to the server
    postInputs(inputs);
  }); // end #startButtonnp

});
