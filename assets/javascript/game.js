// Generate a random number between 19-120
var targetNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var userPointTally = 0;
var wins = 0;
var losses = 0;

$(document).ready(function() {
  targetNumber = Math.floor(Math.random() * 101 + 19);
  console.log(targetNumber);

  //Display the random targennumber
  $(".targetScore").html(targetNumber);

  //Generate a random value for each crystal between 1-12
  crystal1 = Math.floor(Math.random() * 12 + 1);
  crystal2 = Math.floor(Math.random() * 12 + 1);
  crystal3 = Math.floor(Math.random() * 12 + 1);
  crystal4 = Math.floor(Math.random() * 12 + 1);

  // Display the value that comes from the crystal clicks and add them together
  $("#gem1").on("click", function() {
    userPointTally = userPointTally + crystal1;
    $("#totalScore").html(userPointTally);
  });
  $("#gem2").on("click", function() {
    userPointTally = userPointTally + crystal2;
    $("#totalScore").html(userPointTally);
  });
  $("#gem3").on("click", function() {
    userPointTally = userPointTally + crystal3;
    $("#totalScore").html(userPointTally);
  });
  $("#gem4").on("click", function() {
    userPointTally = userPointTally + crystal4;
    $("#totalScore").html(userPointTally);
  });
});
//check whether the user's number is equal to the target number
// check whether the user's number is larger than the target number
// if the number is larger add to the losses. and reset
// if the number is equal add to the wins and reset

$("document").on("click", function() {
  if (userPointTally == targetNumber) {
    wins++;
  } else if (userPointTally > targetNumber) {
    losses++;
  }
  $("#wins").html(wins);
  $("#losses").html(losses);
});
