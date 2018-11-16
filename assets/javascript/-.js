// wins, losses, current score, target
var wins = 0;
var losses =0;
var currScore = 0;
var targetScore = 0;

var imageSRC =[
    "image1",
    "image2",
    "image3"
]
//display score
//compare wins/losses

//function that generates target score, and sets crystals
function resetGame(){
    // generate random target score
    //
    setCrystalVals()
}

function setCrystalVals(){
    //dynamic is the key word
    for(var i = 0; i< imageSRC.length; i++){
        var crystalVal = Math.random()
        var cyrstal = $("<img>")
        cyrstal.attr("src", imageSRC[i])
        cyrstal.attr("class", "gems")
        cyrstal.attr("data-crystalVal", crystalVal) //crystal1 =10
        $(".gemsDiv").append(cyrstal)
    }
}
//$("div").attr
// One sets
// two gets
//$("div").attr("id", "divId") if you see two things its setting the value
//$("div").attr("id") this is capturing the attribute

$(".gemsDiv").on("click", ".gems", function(){
    currScore += parseInt($(this).attr("data-crystalVal")) // each time we pull values in from html tag its text
    checkScore()
})

