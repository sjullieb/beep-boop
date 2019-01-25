
var beepBoop = function(number, name){
  var stringNumber = "";
  stringNumber = number.toString();

  var userName = name;
  if (userName){
    userName = ", " + userName;
  }

  if (number % 3 === 0){
    return("I'm sorry" + userName + ". I'm afraid I can't do that.");
  } else if (stringNumber.includes("1")) {
    return("Boop!");
  } else if (stringNumber.includes("0")) {
    return("Beep!");
  } else {
    return(stringNumber);
  }
};

$(document).ready(function(){
  $("#name").focus();

  $("form").submit(function(event){
    event.preventDefault();

    var userName = $("#name").val();
    var inputNumber = parseInt($("#number").val());
    var outputText = [];

    if (isNaN(inputNumber)){
        alert("Please type in a number!");
        $("#number").focus();
    } else {

      for(var index = 0; index <= inputNumber; index++){
        outputText.push(beepBoop(index, userName));
      }

      if (userName) {
        $(".name").text(userName + ",");
      }

      //$("#result").text(outputText.join(", "));
      outputText.forEach(function(reply){
        var imgTagText = "";
        if (reply.includes("sorry")){
          imgTagText = "<img src='img/sorry.jpg' alt='Sorry...'>";
        }
        else if (reply.includes("Beep")) {
          imgTagText = "<img src='img/beep.jpg' alt='Beep!'>";
        }
        else if (reply.includes("Boop")) {
          imgTagText = "<img src='img/boop.jpg' alt='Boop!'>";
        }

        $("ul").append("<li>" + imgTagText + reply + "</li>");
      });

      $(".input").hide();
      $(".result").show();
    }
  });

  $("#again").click(function(){
    $(".input").show();
    $(".result").hide();
    $("#number").val("");
    $("#number").focus();
  });
});
