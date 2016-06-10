
// BUSINESS LOGIC
//
// var converter = function(number){
// for( i=0 ; i<number ; i++ ){
//   if ( number % 3 === 0 && number % 5 === 0 ){
//     var newNumber = "PingPong";
//   } else {
//     alert("Test");
//     }
//   }
//   return newNumber;
// }


// USER LOGIC
$(document).ready(function() {

  $("form#game").submit(function(event){
    event.preventDefault();
    var enteredNumber = parseInt($("#userInput").val());
    // var output = converter(userInput);

    $("#results").append("<li>" + enteredNumber + "</li>");
    $("#answer").show();
  });
});
