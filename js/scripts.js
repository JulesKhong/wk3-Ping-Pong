
// BUSINESS LOGIC

var converter = function(number){
for( i = 0 ; i < number ; i++ ) {
  if ( number % 3 === 0 && number % 5 === 0 ){
    var newNumber = "PingPong";
  }
  else {
    var newNumber = 4;
  }
  } return newNumber;
}


// USER LOGIC
$(document).ready(function() {

  $("form#game").submit(function(event){
    event.preventDefault();
    var enteredNumber = parseInt($("#userInput").val());
    var output = converter(enteredNumber);

    $("#results").append("<li>" + output + "</li>");
    $("#answer").show();
  });
});
