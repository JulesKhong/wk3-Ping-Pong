
// BUSINESS LOGIC
var numberList = [];
var initialArray = [];


// TURNS INPUT NUMBER INTO AN ARRAY
var nowArray = function(num){
  if (!isNaN(num)){
    // var numberArray = num.map(Number);
    for ( k=1 ; k <= num ; k++ ){
    numberList.push(k);
    }
  }
}

// TRANSLATES EVERY ITEM IN THE ARRAY TO PING PONG TERMS
// var converter = function(initialArray){
//   for( var i = 0 ; i < initialArray.length ; i++ ) {
//     if ( nowArray % 3 === 0 && nowArray % 5 === 0 ){
//       numberList.push("pingpong");
//     }
//     else if ( nowArray % 5 === 0) {
//       numberList.push("pong");
//     }
//     else {
//       numberList.push(i);
//     }
//     }
// }


// USER LOGIC
$(document).ready(function() {

  $("form#game").submit(function(event){
    event.preventDefault();
    var enteredNumber = parseInt($("#userInput").val());
    // var output = converter(enteredNumber);

    nowArray(enteredNumber);

    for ( var j=0 ; j < numberList.length; j++) {
      $("#results").append("<li>" + numberList[j] + "</li>");
    };
    $("#answer").show();
  });
});
