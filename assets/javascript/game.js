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
  $(".gems").on("click", function() {
    userScore += parseInt($(this).attr("data-crystalValue"));
    userScoreDisplay = userScore;
    $("#totalScore").html(userScoreDisplay);
  });
}
if (userScoreDisplay == targetScore) {
  wins++;
  $("#wins").html(wins);
} else if (userScoreDisplay > targetScore) {
  losses++;
  $("#losses").html(losses);
}
