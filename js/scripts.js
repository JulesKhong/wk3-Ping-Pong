
// BUSINESS LOGIC
var numberList = [];
var pingPongArray = [];


// TURNS INPUT NUMBER INTO AN ARRAY
var nowArray = function(num){
  if (!isNaN(num)){
    // var numberArray = num.map(Number);
    for ( k=1 ; k <= num ; k++ ){
    numberList.push(k);
    }
    converter(numberList);
  } else {
    alert("Please enter a number");
  }
}
// CALL CONVERTER FUNCTION TO TURN NUMBERLIST INTO PING PONG LIST


// TRANSLATES EVERY ITEM IN THE ARRAY TO PING PONG TERMS
var converter = function(numberArray){
  for( var i = 1 ; i <= numberArray.length ; i++ ) {
    if ((numberArray[i-1] % 3 === 0) && ((numberArray[i-1] % 5) === 0 )) {
      pingPongArray.push("pingpong");
    }
    else if (((numberArray[i-1]) % 5) === 0 ) {
      pingPongArray.push("pong");
    }
    else if ((numberArray[i-1]) % 3 === 0) {
      pingPongArray.push("ping");
    }
    else {
      pingPongArray.push(i);
    }
    }
}


// USER LOGIC
$(document).ready(function() {

  $("form#game").submit(function(event){
    event.preventDefault();
    var enteredNumber = parseInt($("#userInput").val());
    // var output = converter(enteredNumber);

    nowArray(enteredNumber);

    for ( var j=0 ; j < pingPongArray.length; j++) {
      $("#results").append("<li>" + pingPongArray[j] + "</li>");
    };
    pingPongArray=[];
    $("#answer").show();
  });
});
