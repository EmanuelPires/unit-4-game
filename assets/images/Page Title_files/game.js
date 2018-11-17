var wins = 0;
var losses = 0;
var targetScore;
var userScore = 0;
var crystalPics = [
  "https://i.redd.it/oh5jq6u9hjy11.jpg",
  "https://external-preview.redd.it/xREzFkhNzrdGcloG9UC97U6UAmDxlJqOEHHvQ3CAyCc.jpg?auto=webp&s=29e7b02cf434789610d92e17ff978b8ede799dcd",
  "https://i.redd.it/k4pcojucxhy11.png",
  "https://i.redd.it/d22amc875jy11.jpg"
];
$("document").ready(function() {
  setCrystalVal();
});

function setCrystalVal() {
  $(".gemsDiv").empty();
  targetScore = Math.floor(Math.random() * 101) + 19;
  for (var i = 0; i < crystalPics.length; i++) {
    crystalValue = Math.floor(Math.random() * 12) + 1;
    var crystal = $("<img>");
    crystal.attr("src", crystalPics[i]);
    crystal.attr("class", "gems");
    crystal.attr("data-crystalValue", crystalValue);
    $(".gemsDiv").append(crystal);
  }
  $(".targetScore").html(targetScore);
}

$(document).on("click", ".gems", function() {
  var clickSum = parseInt($(this).attr("data-crystalValue"));
  userScore += clickSum;
  console.log(userScore);
  $("#totalScore").html(userScore);

  if (userScore > targetScore) {
    console.log("You Lose");
    losses++;
    userScore = 0;
    $("#losses").html(losses);
    setCrystalVal();
  } else if (userScore === targetScore) {
    wins++;
    userScore = 0;
    $("#wins").html(wins);
    setCrystalVal();
  }
});
