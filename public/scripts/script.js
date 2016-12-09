var players = [];
var guessesMade = 0;
//constructor function
var Player = function(name, guess){
  this.name = name;
  this.guess = guess;
  this.difference = undefined;
  players.push(this);
};
//make player objects
var playerOne = new Player('Player One');
var playerTwo = new Player('Player Two');
var playerThree = new Player('Player Three');
var playerFour = new Player('Player Four');

var displayGuessDetails = function(array){
  console.log('in displayGuessDetails');
  //clear pastGuess div
  $('#pastGuess').html('');
  for (var i = 0; i < array.length; i++) {
    if (array[i].difference === 'match') {
      //add functionality to display that this player wins on dom, and button to restart game
      $('.modal-body').append('<p>' + array[i].name + ' Wins!</p>');
      $('#myModal').modal('show');
    } else {
      // display past guess details on dom
      $('#pastGuess').append('<div class="playerGuessContainer col-sm-3"></div>');
      $el = $('#pastGuess').children().last();
      $el.append('<div class="playerGuess"></div>');
      $guess = $el.children().last();
      $guess.append('<p>'+ array[i].name +'</p>');
      $guess.append('<p>Last guess: ' + array[i].guess + '</p>');
      $guess.append('<p>' + array[i].difference + '</p>');
    } // end else
  } // end for
}; // end displayGuessDetails

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
  }); // end ajax
}; // end postMaxNum

var postInputs = function(playersArray) {
  $.ajax({
    type: "POST",
    data: {players: playersArray},
    url: '/postInputs',
    success: function(response) {
      console.log('postInputs ajax success. response: ', response);
      displayGuessDetails(response);
    },
    error: function(){
      console.log('get max ajax error');
    }
  }); // end ajax
}; // end postMaxNum

$(document).ready(function(){
  console.log('JQ');
  //event listeners
  $('#startButton').on('click', function(){
    $('#inputMode').hide();
    $('#playMode').show();
    console.log('start clicked');
    var maxNum = $('#maxNumIn').val();
    //display max number on DOM
    $('#maxNumber').html('Max Number: '+maxNum);
    console.log('max number input:',maxNum);
    postMaxNum(maxNum);
  }); // end #startButton
  $('#submit').on('click', function(){
    console.log('submit clicked');
    // var inputs = {
    //   one:$('#playerOne').val(),
    //   two:$('#playerTwo').val(),
    //   three:$('#playerThree').val(),
    //   four:$('#playerFour').val()
    // };
    //create player objects
    playerOne.guess = $('#playerOne').val();
    playerTwo.guess = $('#playerTwo').val();
    playerThree.guess = $('#playerThree').val();
    playerFour.guess = $('#playerFour').val();
    console.log('Players array: ' , players);
    //send input array as an object to the server
    postInputs(players);
    //clear input values
    $('input').val('');
    //increment the current round of the game, display on DOM
    guessesMade++;
    $('#count').html('Guesses Made: '+guessesMade);
  }); // end #startButtonnp
  $('#abandon').on('click', function() {
    console.log('abandon clicked');
    $('#playMode').hide();
    $('#inputMode').show();
  }); // end #abandon
  $('#closeModal').on('click', function() {
    $('#inputMode').show();
    $('#playMode').hide();
  });
}); // end doc ready
